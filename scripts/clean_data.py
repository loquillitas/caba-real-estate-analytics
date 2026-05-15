"""
clean_data.py
Limpia y filtra el dataset de alquileres scrapeado de ZonaProp (marzo 2026).

Input:  data/raw/alquileres_20260302_100514.csv
Output: data/processed/alquileres_limpios.csv

Hallazgos del EDA que guían la limpieza:
  - usd_equivalent: 100% nulo → usar price_usd directamente
    (el scraper ya calculó price_usd = price_ars/1280 para avisos en ARS)
  - m2_covered: 100% nulo → usar m2_total
  - property_type: 100% nulo → no disponible
  - 77 avisos ARS con price_ars < 50.000 (mal parseados: "$ 780" en vez de "$ 780.000")
  - 35 avisos USD con price_usd > 50.000 ("USD 750.000" parseado como 750.000)
    → ambos grupos se eliminan con el filtro de percentiles
  - 6.712 filas sin neighborhood (27%) → 80% recuperables del campo address
  - ~2.724 avisos temporarios (~11%) → marcados con es_temporario=True, excluidos del CSV
"""

import re
import unicodedata
from pathlib import Path

import pandas as pd
import sys

BASE_DIR = Path(__file__).parent.parent
RAW_DIR  = BASE_DIR / "data" / "raw"
OUT_DIR  = BASE_DIR / "data" / "processed"
OUT_DIR.mkdir(parents=True, exist_ok=True)

RAW_FILE = RAW_DIR / "alquileres_20260302_100514.csv"

# Barrios reconocidos de CABA para extracción desde address
BARRIOS_CABA = [
    "Agronomia", "Almagro", "Balvanera", "Barracas", "Belgrano", "Boedo",
    "Caballito", "Chacarita", "Coghlan", "Colegiales", "Constitucion",
    "Flores", "Floresta", "La Boca", "La Paternal", "Liniers", "Lugano",
    "Mataderos", "Monte Castro", "Monserrat", "Montserrat", "Microcentro",
    "Nueva Pompeya", "Nunez", "Nuñez", "Palermo", "Parque Avellaneda",
    "Parque Chacabuco", "Parque Chas", "Parque Patricios", "Paternal",
    "Puerto Madero", "Recoleta", "Retiro", "Saavedra", "San Cristobal",
    "San Nicolas", "San Telmo", "Velez Sarsfield", "Versalles",
    "Villa Crespo", "Villa Del Parque", "Villa Devoto",
    "Villa General Mitre", "Villa Lugano", "Villa Luro", "Villa Ortuzar",
    "Villa Pueyrredon", "Villa Real", "Villa Riachuelo", "Villa Santa Rita",
    "Villa Soldati", "Villa Urquiza", "Barrio Norte", "Once", "Centro",
]

def _strip_accents(s: str) -> str:
    return "".join(
        c for c in unicodedata.normalize("NFD", s)
        if unicodedata.category(c) != "Mn"
    )

def _fix_mojibake(s: str) -> str:
    """Repara bytes UTF-8 leídos como latin-1 (ej: 'ConstituciÃ³n' → 'Constitución')."""
    try:
        return s.encode("latin-1").decode("utf-8")
    except (UnicodeDecodeError, UnicodeEncodeError):
        return s

_BARRIO_PATTERN = re.compile(
    "|".join(
        r"\b" + re.escape(_strip_accents(b)) + r"\b"
        for b in sorted(BARRIOS_CABA, key=len, reverse=True)
    ),
    re.IGNORECASE,
)

# Canonical lookup: stripped-lowercase → properly-accented name from BARRIOS_CABA
_CANONICAL_BARRIO: dict[str, str] = {
    _strip_accents(b).lower(): b for b in BARRIOS_CABA
}

def _normalize_barrio(name: str) -> str:
    """Map any Unicode variant of a barrio to the canonical BARRIOS_CABA spelling."""
    return _CANONICAL_BARRIO.get(_strip_accents(name).lower(), name.title())

def _extract_barrio_from_address(addr: str) -> str | None:
    for text in (addr, _fix_mojibake(addr)):
        m = _BARRIO_PATTERN.search(_strip_accents(text))
        if m:
            return _normalize_barrio(m.group(0))
    return None


def load_csv(path: Path) -> pd.DataFrame:
    for enc in ("utf-8", "latin-1"):
        try:
            return pd.read_csv(path, encoding=enc, low_memory=False)
        except UnicodeDecodeError:
            continue
    raise ValueError(f"No se pudo leer {path}")


def clean(df: pd.DataFrame) -> pd.DataFrame:
    # ── 1. Columnas numéricas ─────────────────────────────────────────────────
    num_cols = ["price_ars", "price_usd", "m2_total", "ambientes",
                "dormitorios", "banos", "expenses_ars", "exchange_rate"]
    for col in num_cols:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")

    # ── 2. Precio de referencia en USD ────────────────────────────────────────
    # price_usd ya contiene el precio unificado:
    #   - avisos ARS: price_usd = price_ars / exchange_rate (calculado al scrapear)
    #   - avisos USD: price_usd = precio en dólares directo
    # usd_equivalent es 100% nulo → no se usa
    df["price_ref_usd"] = df["price_usd"]

    # ── 3. Recuperar avisos ARS con precio sin miles ──────────────────────────
    # 77 filas donde el scraper perdió los miles ("$ 780" → 780 en vez de 780.000)
    # Corrección: × 1000 y recalcular price_ref_usd; los que queden fuera de rango
    # se eliminan en el filtro de percentiles (paso 9)
    bad_ars = (df["currency"] == "ARS") & (df["price_ars"] < 50_000)
    df.loc[bad_ars, "price_ars"]     = df.loc[bad_ars, "price_ars"] * 1000
    df.loc[bad_ars, "price_ref_usd"] = (
        df.loc[bad_ars, "price_ars"] / df.loc[bad_ars, "exchange_rate"]
    )

    # ── 4. Marcar temporarios ─────────────────────────────────────────────────
    # ~2.700 avisos de alquiler temporario (amoblados, servicios incluidos)
    # Precios no comparables con alquileres tradicionales → excluir del análisis
    temp_keywords = r"temporar|turístic|tur.stic|por\s+d[íi]a|diario|weekly|airbnb|semanal"
    df["es_temporario"] = df["title"].str.contains(temp_keywords, case=False, na=False)

    # ── 5. Excluir alquileres temporarios del dataset limpio ──────────────────
    df = df[~df["es_temporario"]].copy()

    # ── 6. Barrio ─────────────────────────────────────────────────────────────
    # neighborhood tiene 27% nulos → recuperar del campo address cuando es posible
    if "neighborhood" in df.columns:
        df["barrio"] = (
            df["neighborhood"]
            .fillna("")
            .apply(lambda x: _normalize_barrio(_fix_mojibake(x.strip())) if x.strip() else None)
            .replace("", None)
        )

        null_mask = df["barrio"].isnull()
        if null_mask.any() and "address" in df.columns:
            recovered = (
                df.loc[null_mask, "address"]
                .fillna("")
                .apply(_extract_barrio_from_address)
            )
            df.loc[null_mask, "barrio"] = recovered
    else:
        df["barrio"] = None

    # ── 7. Superficie ─────────────────────────────────────────────────────────
    # m2_covered es 100% nulo → usar m2_total
    df["superficie"] = pd.to_numeric(df.get("m2_total"), errors="coerce")

    # ── 8. Eliminar filas sin precio ni superficie ────────────────────────────
    df = df.dropna(subset=["price_ref_usd", "superficie"])

    # ── 9. Filtrar outliers de precio ─────────────────────────────────────────
    # Percentil 1-99 para eliminar errores de parsing y casos extremos
    p_low  = df["price_ref_usd"].quantile(0.01)
    p_high = df["price_ref_usd"].quantile(0.99)
    df = df[df["price_ref_usd"].between(p_low, p_high)]

    # ── 10. Filtrar outliers de superficie ───────────────────────────────────
    # < 15 m²: probablemente garaje/baulera; > 400 m²: fuera de rango residencial
    df = df[df["superficie"].between(15, 400)]

    # ── 11. Precio por m² ─────────────────────────────────────────────────────
    df["price_m2_usd"] = df["price_ref_usd"] / df["superficie"]
    # Rango razonable para alquiler mensual en CABA: USD 2–150/m²
    df = df[df["price_m2_usd"].between(2, 150)]

    # ── 12. Rellenar nulos en amenities booleanos ─────────────────────────────
    bool_cols = [
        "cochera", "balcon", "terraza", "pileta", "gimnasio", "ascensor",
        "laundry", "sum", "parrilla", "aire_acondicionado", "acepta_mascotas",
        "amoblado", "apto_profesional", "baulera", "patio", "jardin",
        "seguridad_24hs", "calefaccion", "apto_credito",
    ]
    for col in bool_cols:
        if col in df.columns:
            df[col] = df[col].fillna(False)

    return df.reset_index(drop=True)


def main():
    if not RAW_FILE.exists():
        print(f"ERROR: No se encontró {RAW_FILE}")
        sys.exit(1)

    print(f"Leyendo: {RAW_FILE.name}")
    df_raw = load_csv(RAW_FILE)
    print(f"Filas originales:           {len(df_raw):>7,}")

    df_clean = clean(df_raw)

    print(f"Filas después de limpieza:  {len(df_clean):>7,}")
    print(f"Con barrio conocido:        {df_clean['barrio'].notna().sum():>7,}  ({df_clean['barrio'].notna().mean()*100:.1f}%)")
    print(f"Barrios únicos:             {df_clean['barrio'].nunique():>7,}")
    print(f"Precio USD — mediana:       {df_clean['price_ref_usd'].median():>7,.0f}")
    print(f"Precio USD — rango:         {df_clean['price_ref_usd'].min():,.0f} – {df_clean['price_ref_usd'].max():,.0f}")
    print(f"Superficie — mediana:       {df_clean['superficie'].median():>7,.0f} m²")

    out_path = OUT_DIR / "alquileres_limpios.csv"
    df_clean.to_csv(out_path, index=False, encoding="utf-8")
    print(f"\nGuardado en: {out_path}")


if __name__ == "__main__":
    main()
