"""
clean_data_venta.py
Limpia y filtra el dataset de compraventa de ZonaProp (Properati 2020).

Input:  data/raw/ventas_properati_2020.csv  (symlink o copia del original)
Output: data/processed/ventas_limpias.csv

Hallazgos del EDA que guían la limpieza:
  - 146.660 filas totales, todas en Argentina, todas en USD, todas Venta
  - Filtrar l2 == 'Capital Federal' → 92.539 filas
  - Filtrar property_type residencial (Departamento, PH, Casa) → 91.485 filas
  - 42.654 duplicados por (precio, superficie, barrio, tipo) — avisos re-publicados
    → deduplicar manteniendo el aviso más reciente (end_date mayor)
    → ~51.000 filas únicas estimadas post-dedup
  - surface_total: 10.1% nulos → eliminar filas (no imputable sin otro dato)
  - surface_covered: disponible (a diferencia de alquileres); usar para ratio_cubierto
  - bathrooms: 2.7% nulos → imputar según ambientes (monoambiente=1, resto=1)
  - bedrooms=0 en monoambientes es válido (no confundir con nulo)
  - Outliers de precio: filtrar P1-P99 en USD
  - Outliers de m²: < 15 m² (garaje/baulera) o > 800 m² (excluir de análisis residencial)
  - precio_por_m2: rango razonable USD 500–8.000/m²
"""

import sys
from pathlib import Path

import pandas as pd

BASE_DIR  = Path(__file__).parent.parent
RAW_FILE  = BASE_DIR / "data" / "raw" / "ventas_properati_2020.csv"
OUT_DIR   = BASE_DIR / "data" / "processed"
OUT_FILE  = OUT_DIR / "ventas_limpias.csv"
OUT_DIR.mkdir(parents=True, exist_ok=True)

PROPERTY_TYPES_OK = {"Departamento", "PH", "Casa"}


def load_csv(path: Path) -> pd.DataFrame:
    for enc in ("utf-8", "latin-1"):
        try:
            return pd.read_csv(path, encoding=enc, low_memory=False)
        except UnicodeDecodeError:
            continue
    raise ValueError(f"No se pudo leer {path}")


def clean(df: pd.DataFrame) -> pd.DataFrame:
    # ── 1. Filtros geográficos y de operación ────────────────────────────────
    df = df[df["l2"] == "Capital Federal"].copy()
    df = df[df["property_type"].isin(PROPERTY_TYPES_OK)].copy()

    # ── 2. Renombrar a nombres del proyecto ──────────────────────────────────
    df = df.rename(columns={
        "l3":               "barrio",
        "rooms":            "ambientes",
        "bedrooms":         "dormitorios",
        "bathrooms":        "banos",
        "surface_total":    "m2_total",
        "surface_covered":  "m2_cubierto",
        "price":            "price_usd",
    })

    # ── 3. Convertir tipos numéricos ─────────────────────────────────────────
    for col in ["price_usd", "m2_total", "m2_cubierto", "ambientes",
                "dormitorios", "banos"]:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    # ── 4. Deduplicar avisos re-publicados ───────────────────────────────────
    # Properati republica el mismo aviso con nueva fecha. Conservar el más
    # reciente (end_date mayor) para quedarnos con el precio vigente.
    df["end_date"] = pd.to_datetime(df["end_date"], errors="coerce")
    df = (
        df.sort_values("end_date", ascending=False)
          .drop_duplicates(subset=["price_usd", "m2_total", "barrio",
                                   "property_type", "ambientes"])
          .copy()
    )

    # ── 5. Eliminar filas sin superficie ni precio ───────────────────────────
    df = df.dropna(subset=["m2_total", "price_usd"])

    # ── 6. Imputar baños nulos ───────────────────────────────────────────────
    # 2.7% nulos — imputar con 1 (valor modal para todos los tramos de ambientes)
    df["banos"] = df["banos"].fillna(1).astype(int)

    # ── 7. Imputar dormitorios: monoambiente → 0, resto → ambientes - 1 ─────
    # bedrooms=0 en rooms=1 es válido (studio/monoambiente), no es nulo
    df["dormitorios"] = df["dormitorios"].fillna(
        (df["ambientes"] - 1).clip(lower=0)
    )

    # ── 8. Filtrar tipos residenciales y tamaños razonables ──────────────────
    df = df[df["m2_total"].between(15, 800)]
    df = df[df["ambientes"].between(1, 10)]

    # ── 9. Filtrar outliers de precio ────────────────────────────────────────
    p_low  = df["price_usd"].quantile(0.01)
    p_high = df["price_usd"].quantile(0.99)
    df = df[df["price_usd"].between(p_low, p_high)]

    # ── 10. Precio por m² — rango residencial en CABA ────────────────────────
    df["precio_por_m2"] = df["price_usd"] / df["m2_total"]
    df = df[df["precio_por_m2"].between(500, 8_000)]

    # ── 11. Feature: ratio superficie cubierta / total ───────────────────────
    df["ratio_cubierto"] = (df["m2_cubierto"] / df["m2_total"]).clip(0, 1).round(3)
    # donde m2_cubierto es nulo (10.7%), ratio_cubierto queda NaN (se imputa en model_venta.py)

    # ── 12. Normalizar barrio ─────────────────────────────────────────────────
    df["barrio"] = df["barrio"].str.strip().str.title()

    return df.reset_index(drop=True)


def main():
    if not RAW_FILE.exists():
        # intentar encontrar el archivo por su nombre original si no hay symlink
        alt = Path(
            "E:/ORDENADOR/trabajos/proyectos_personales/inmobiliario_prueba"
            "/data/raw/bsas_realstate_on_sale_properati_dataset_2020.csv"
        )
        if alt.exists():
            RAW_FILE_USE = alt
        else:
            print(f"ERROR: No se encontró {RAW_FILE}")
            print("Copiá o enlazá el archivo a data/raw/ventas_properati_2020.csv")
            sys.exit(1)
    else:
        RAW_FILE_USE = RAW_FILE

    print(f"Leyendo: {RAW_FILE_USE.name}")
    df_raw = load_csv(RAW_FILE_USE)
    print(f"Filas originales:              {len(df_raw):>8,}")

    df_clean = clean(df_raw)

    print(f"Filas después de limpieza:     {len(df_clean):>8,}")
    print(f"Barrios únicos:                {df_clean['barrio'].nunique():>8,}")
    print(f"Property types:")
    for pt, n in df_clean.property_type.value_counts().items():
        print(f"  {pt:20s} {n:>7,}")
    print(f"Precio USD — mediana:          {df_clean['price_usd'].median():>8,.0f}")
    print(f"Precio USD — rango:            {df_clean['price_usd'].min():,.0f} – {df_clean['price_usd'].max():,.0f}")
    print(f"Precio/m² — mediana:           {df_clean['precio_por_m2'].median():>8,.0f} USD/m²")
    print(f"Superficie — mediana:          {df_clean['m2_total'].median():>8,.0f} m²")
    print(f"ratio_cubierto nulos:          {df_clean['ratio_cubierto'].isnull().sum():>8,}  ({df_clean['ratio_cubierto'].isnull().mean()*100:.1f}%)")

    df_clean.to_csv(OUT_FILE, index=False, encoding="utf-8")
    print(f"\nGuardado en: {OUT_FILE}")


if __name__ == "__main__":
    main()
