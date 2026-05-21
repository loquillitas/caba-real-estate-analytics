"""
model_venta.py — Modelo de precios de compraventa CABA 2020

QUÉ HACE:
  1. Carga el CSV limpio de ventas y agrega features de ingeniería
  2. Entrena XGBoost con optimización bayesiana (Optuna, 50 trials por defecto)
  3. Exporta un JSON rico con todo lo que necesita el dashboard:
       - KPIs del mercado
       - Distribución de precios
       - Ranking de barrios
       - Impacto de features clave (precio/m², tipo, superficie cubierta)
       - Feature importances
       - Grilla de predicción para el estimador interactivo

DIFERENCIAS RESPECTO AL MODELO DE ALQUILERES:
  - Sin amenities (el dataset de Properati no los tiene)
  - property_type como feature adicional (Departamento / PH / Casa)
  - surface_covered disponible → ratio_cubierto
  - Target: price_usd como precio de venta total (no mensual)
  - Datos de 2020

USO:
  python scripts/model_venta.py
  python scripts/model_venta.py --fast    # 20 trials (desarrollo)
  python scripts/model_venta.py --trials 30
"""

import argparse
import json
import math
import re
import unicodedata
import warnings
from pathlib import Path

import numpy as np
import optuna
import pandas as pd
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import KFold, train_test_split
from sklearn.preprocessing import LabelEncoder
from xgboost import XGBRegressor

warnings.filterwarnings("ignore")
optuna.logging.set_verbosity(optuna.logging.WARNING)

BASE_DIR  = Path(__file__).parent.parent
DATA_PATH = BASE_DIR / "data" / "processed" / "ventas_limpias.csv"
OUT_JSON  = BASE_DIR / "output" / "results_venta.json"
OUT_JS    = BASE_DIR / "web" / "data_venta.js"
OUT_JSON.parent.mkdir(parents=True, exist_ok=True)

PROPERTY_TYPE_LABEL = {
    "Departamento": "Departamento",
    "Ph":           "PH",
    "Casa":         "Casa",
}

FEATURE_LABELS = {
    "barrio_enc":               "Barrio",
    "precio_med_barrio":        "Precio mediano del barrio",
    "precio_med_barrio_tipo":   "Precio mediano barrio × tipo",
    "m2_total":                 "Superficie total (m²)",
    "m2_cubierto":              "Superficie cubierta (m²)",
    "ratio_cubierto":           "% superficie cubierta",
    "ambientes":                "Ambientes",
    "dormitorios":              "Dormitorios",
    "banos":                    "Baños",
    "property_enc":             "Tipo de propiedad",
    "m2_por_ambiente":          "m² por ambiente",
    "m2_por_bano":              "m² por baño",
    "banos_por_ambiente":       "Baños por ambiente",
    "es_monoambiente":          "Es monoambiente",
    "es_ph":                    "Es PH",
    "es_casa":                  "Es Casa",
    # texto
    "txt_pileta":               "Pileta/piscina (texto)",
    "txt_gym":                  "Gimnasio (texto)",
    "txt_cochera":              "Cochera (texto)",
    "txt_baulera":              "Baulera (texto)",
    "txt_sum":                  "SUM (texto)",
    "txt_parrilla":             "Parrilla (texto)",
    "txt_laundry":              "Laundry (texto)",
    "txt_amenities":            "Amenities (texto)",
    "txt_terraza":              "Terraza (texto)",
    "txt_balcon":               "Balcón (texto)",
    "txt_jardin":               "Jardín/patio (texto)",
    "txt_seguridad":            "Seguridad/portero (texto)",
    "txt_ascensor":             "Ascensor (texto)",
    "txt_a_estrenar":           "A estrenar (texto)",
    "txt_es_frente":            "Al frente (texto)",
    "txt_es_contrafrente":      "Contrafrente (texto)",
    "txt_es_lateral":           "Lateral (texto)",
    "txt_es_interno":           "Interno (texto)",
    "txt_piso_num":             "Número de piso (texto)",
    "txt_apto_credito":         "Apto crédito (texto)",
    "txt_apto_profesional":     "Apto profesional (texto)",
    # geo
    "dist_puerto_madero":       "Distancia a Puerto Madero (km)",
    "dist_palermo":             "Distancia a Bosques de Palermo (km)",
    "dist_recoleta":            "Distancia a Recoleta (km)",
    "dist_obelisco":            "Distancia al Obelisco (km)",
    # temporal
    "dias_en_mercado":          "Días en mercado",
    "mes_publicacion":          "Mes de publicación",
}

# ── Puntos de referencia geográficos ──────────────────────────────────────────
GEO_REFS = {
    "dist_puerto_madero": (-34.6150, -58.3632),
    "dist_palermo":       (-34.5748, -58.4195),
    "dist_recoleta":      (-34.5880, -58.3930),
    "dist_obelisco":      (-34.6037, -58.3816),
}


def _normalizar_texto(text: str) -> str:
    if not isinstance(text, str):
        return ""
    # quitar HTML tags
    text = re.sub(r"<[^>]+>", " ", text)
    # normalizar unicode: decompose y quedarse con base ASCII
    text = unicodedata.normalize("NFKD", text)
    text = "".join(c for c in text if not unicodedata.combining(c))
    return text.lower()


# Patrones regex — aplicados sobre texto ya normalizado (sin tildes, lowercase)
_TEXT_PATTERNS = {
    "txt_pileta":          r"\b(pileta|piscina|natatorio|pool)\b",
    "txt_gym":             r"\b(gimnasio|gym|fitness)\b",
    "txt_cochera":         r"\b(cochera|garage|garaje)\b",
    "txt_baulera":         r"\b(baulera)\b",
    "txt_sum":             r"\b(sum\b|salon de usos|salón de usos)",
    "txt_parrilla":        r"\b(parrilla)\b",
    "txt_laundry":         r"\b(laundry|lavadero)\b",
    "txt_amenities":       r"\b(amenities|amenitie)\b",
    "txt_terraza":         r"\b(terraza)\b",
    "txt_balcon":          r"\b(balcon|balcón)\b",
    "txt_jardin":          r"\b(jardin|jardín|patio)\b",
    "txt_seguridad":       r"\b(seguridad|vigilancia|portero|conserjeria|conserje)\b",
    "txt_ascensor":        r"\b(ascensor|elevador|lift)\b",
    "txt_a_estrenar":      r"\b(a estrenar|estrenar|0 km|cero km)\b",
    "txt_es_frente":       r"\bal frente\b",
    "txt_es_contrafrente": r"\b(contrafrente|contra frente)\b",
    "txt_es_lateral":      r"\b(lateral)\b",
    "txt_es_interno":      r"\b(interno|interna)\b",
    "txt_apto_credito":    r"\b(apto cr[eé]dito|apto cred\b|acepta cr[eé]dito)\b",
    "txt_apto_profesional":r"\b(apto profesional|uso profesional)\b",
}

_PISO_PATTERN = re.compile(
    r"(?:piso\s*(\d{1,2})|(\d{1,2})[°o]?\s*piso|(\d{1,2})[°o]\s*(?:piso)?)",
    re.IGNORECASE,
)


def _extract_piso(text: str) -> float:
    m = _PISO_PATTERN.search(text)
    if m:
        val = next(g for g in m.groups() if g is not None)
        n = int(val)
        return float(n) if n <= 50 else -1.0
    if re.search(r"\b(penthouse|ultimo piso|piso alto|alta altura)\b", text):
        return 20.0
    if re.search(r"\b(planta baja|pb\b)\b", text):
        return 0.0
    if re.search(r"\b(semipiso|semi piso)\b", text):
        return 8.0
    return -1.0   # desconocido


def extract_text_features(df: pd.DataFrame) -> pd.DataFrame:
    texto = (df["title"].fillna("") + " " + df["description"].fillna("")).apply(_normalizar_texto)

    for feat, pattern in _TEXT_PATTERNS.items():
        df[feat] = texto.str.contains(pattern, regex=True).astype(int)

    df["txt_piso_num"] = texto.apply(_extract_piso)
    return df


def add_geo_features(df: pd.DataFrame) -> pd.DataFrame:
    lat_rad = math.radians(-34.60)   # latitud media de CABA para corrección

    for feat, (ref_lat, ref_lon) in GEO_REFS.items():
        dlat = df["lat"] - ref_lat
        dlon = (df["lon"] - ref_lon) * math.cos(lat_rad)
        # distancia en grados → km (1° ≈ 111.32 km)
        df[feat] = np.sqrt(dlat**2 + dlon**2) * 111.32
        # imputar con mediana donde lat/lon son nulos
        df[feat] = df[feat].fillna(df[feat].median())

    return df


def add_temporal_features(df: pd.DataFrame) -> pd.DataFrame:
    start = pd.to_datetime(df["start_date"], errors="coerce")
    end   = pd.to_datetime(df["end_date"],   errors="coerce")
    df["dias_en_mercado"] = (end - start).dt.days.clip(lower=0).fillna(
        (end - start).dt.days.clip(lower=0).median()
    ).astype(int)
    df["mes_publicacion"] = start.dt.month.fillna(6).astype(int)
    return df

M2_GRID        = [30, 45, 55, 70, 85, 100, 120, 150, 180, 220]
AMBIENTES_GRID = [1, 2, 3, 4, 5]
PROPERTY_TYPES = ["Departamento", "Ph", "Casa"]


# ─── Carga y feature engineering ──────────────────────────────────────────────

def load_and_engineer(path: Path) -> tuple[pd.DataFrame, LabelEncoder, LabelEncoder]:
    df = pd.read_csv(path, low_memory=False)

    df["property_type"] = df["property_type"].str.strip().str.title()
    df["property_type"] = df["property_type"].replace({"Ph": "Ph"})

    df = df.dropna(subset=["barrio", "ambientes", "m2_total"]).copy()

    # ratio_cubierto: imputar por mediana barrio×tipo, luego mediana global
    mediana_ratio = (
        df.groupby(["barrio", "property_type"])["ratio_cubierto"]
        .transform("median")
    )
    df["ratio_cubierto"] = df["ratio_cubierto"].fillna(mediana_ratio)
    df["ratio_cubierto"] = df["ratio_cubierto"].fillna(df["ratio_cubierto"].median())
    df["m2_cubierto"] = df["m2_cubierto"].fillna(df["m2_total"] * df["ratio_cubierto"])

    # features básicas de tamaño
    df["m2_por_ambiente"]   = (df["m2_total"] / df["ambientes"]).round(2)
    df["m2_por_bano"]       = (df["m2_total"] / df["banos"].replace(0, 1)).round(2)
    df["banos_por_ambiente"] = (df["banos"] / df["ambientes"]).round(3)
    df["es_monoambiente"]   = (df["ambientes"] == 1).astype(int)
    df["es_ph"]             = (df["property_type"] == "Ph").astype(int)
    df["es_casa"]           = (df["property_type"] == "Casa").astype(int)

    # features de texto
    df = extract_text_features(df)

    # features geográficas
    df = add_geo_features(df)

    # features temporales
    df = add_temporal_features(df)

    # encodings
    le_barrio = LabelEncoder()
    le_prop   = LabelEncoder()
    df["barrio_enc"]   = le_barrio.fit_transform(df["barrio"])
    df["property_enc"] = le_prop.fit_transform(df["property_type"])

    return df, le_barrio, le_prop


TEXT_FEATURES = list(_TEXT_PATTERNS.keys()) + ["txt_piso_num"]
GEO_FEATURES  = list(GEO_REFS.keys())

def get_feature_cols(df: pd.DataFrame) -> list[str]:
    base = [
        "barrio_enc", "precio_med_barrio", "precio_med_barrio_tipo",
        "m2_total", "m2_cubierto", "ratio_cubierto",
        "ambientes", "dormitorios", "banos", "property_enc",
        "m2_por_ambiente", "m2_por_bano", "banos_por_ambiente",
        "es_monoambiente", "es_ph", "es_casa",
        "dias_en_mercado", "mes_publicacion",
    ] + TEXT_FEATURES + GEO_FEATURES
    return [c for c in base if c in df.columns]


# ─── Optimización de hiperparámetros con Optuna ────────────────────────────────

def tune(X_train: pd.DataFrame, y_train_log: pd.Series, n_trials: int) -> dict:
    def objective(trial):
        params = {
            "n_estimators":     1000,
            "max_depth":        trial.suggest_int("max_depth", 3, 8),
            "learning_rate":    trial.suggest_float("learning_rate", 0.01, 0.3, log=True),
            "subsample":        trial.suggest_float("subsample", 0.6, 1.0),
            "colsample_bytree": trial.suggest_float("colsample_bytree", 0.6, 1.0),
            "min_child_weight": trial.suggest_int("min_child_weight", 1, 10),
            "reg_alpha":        trial.suggest_float("reg_alpha", 1e-4, 10.0, log=True),
            "reg_lambda":       trial.suggest_float("reg_lambda", 1e-4, 10.0, log=True),
        }
        kf   = KFold(n_splits=5, shuffle=True, random_state=42)
        maes = []
        for tr, va in kf.split(X_train):
            m = XGBRegressor(**params, early_stopping_rounds=50, random_state=42, n_jobs=-1, verbosity=0)
            m.fit(
                X_train.iloc[tr], y_train_log.iloc[tr],
                eval_set=[(X_train.iloc[va], y_train_log.iloc[va])],
                verbose=False,
            )
            maes.append(mean_absolute_error(y_train_log.iloc[va], m.predict(X_train.iloc[va])))
        return float(np.mean(maes))

    study = optuna.create_study(direction="minimize")
    study.optimize(objective, n_trials=n_trials, show_progress_bar=True)
    return study.best_params


def train_final(X_train, X_test, y_train_log, y_test_raw, best_params: dict):
    X_tr, X_val, y_tr, y_val = train_test_split(
        X_train, y_train_log, test_size=0.1, random_state=7
    )
    params = {"n_estimators": 1000, **best_params}
    model  = XGBRegressor(**params, early_stopping_rounds=50, random_state=42, n_jobs=-1, verbosity=0)
    model.fit(X_tr, y_tr, eval_set=[(X_val, y_val)], verbose=False)

    def _eval(y_true_raw, y_pred_raw):
        mae = float(mean_absolute_error(y_true_raw, y_pred_raw))
        return {
            "r2":   round(float(r2_score(y_true_raw, y_pred_raw)), 4),
            "mae":  round(mae, 0),
            "mape": round(float(np.mean(np.abs((y_true_raw - y_pred_raw) / y_true_raw)) * 100), 1),
        }

    tr_m  = _eval(np.expm1(y_tr),  np.expm1(model.predict(X_tr)))
    val_m = _eval(np.expm1(y_val), np.expm1(model.predict(X_val)))

    y_pred = np.expm1(model.predict(X_test))
    mae    = mean_absolute_error(y_test_raw, y_pred)
    rmse   = float(np.sqrt(mean_squared_error(y_test_raw, y_pred)))
    mape   = float(np.mean(np.abs((y_test_raw - y_pred) / y_test_raw)) * 100)
    pct15  = float(np.mean(np.abs(y_pred - y_test_raw) <= y_test_raw * 0.15) * 100)
    r2     = r2_score(y_test_raw, y_pred)
    metrics = {
        "r2":             round(float(r2), 4),
        "mae":            round(float(mae), 0),
        "rmse":           round(rmse, 0),
        "mape":           round(mape, 1),
        "pct_dentro_15":  round(pct15, 1),
        "mae_pct":        round(float(mae / float(y_test_raw.mean()) * 100), 1),
        "n_train":        int(len(X_train)),
        "n_test":         int(len(X_test)),
        "total_data":     int(len(X_train) + len(X_test)),
        "train_r2":       tr_m["r2"],
        "train_mae":      tr_m["mae"],
        "train_mape":     tr_m["mape"],
        "val_r2":         val_m["r2"],
        "val_mae":        val_m["mae"],
        "val_mape":       val_m["mape"],
    }
    return model, metrics


# ─── Construcción de los bloques de resultados ────────────────────────────────

def build_kpis(df: pd.DataFrame) -> dict:
    p    = df["price_usd"].quantile([0.1, 0.25, 0.5, 0.75, 0.9])
    pm2  = df["precio_por_m2"]
    return {
        "precio_mediano":    int(p[0.5]),
        "precio_m2_mediano": round(float(pm2.median()), 0),
        "n_propiedades":     int(len(df)),
        "p10": int(p[0.1]),
        "p25": int(p[0.25]),
        "p75": int(p[0.75]),
        "p90": int(p[0.9]),
    }


def build_distribucion(df: pd.DataFrame) -> dict:
    edges         = np.arange(50_000, 1_225_000, 25_000)
    counts, edges = np.histogram(df["price_usd"], bins=edges)
    return {
        "bins_edge": [int(e) for e in edges],
        "counts":    [int(c) for c in counts],
    }


def build_barrios(df: pd.DataFrame) -> list:
    stats = (
        df.groupby("barrio")["price_usd"]
        .agg(
            precio_mediano="median",
            p25=lambda x: x.quantile(0.25),
            p75=lambda x: x.quantile(0.75),
            n="count",
        )
        .reset_index()
        .query("n >= 10")
    )
    m2 = (
        df.groupby("barrio")["precio_por_m2"]
        .median()
        .rename("precio_m2_mediano")
        .reset_index()
    )
    stats = stats.merge(m2, on="barrio").sort_values("precio_mediano", ascending=False)
    stats["precio_mediano"]    = stats["precio_mediano"].round(0).astype(int)
    stats["p25"]               = stats["p25"].round(0).astype(int)
    stats["p75"]               = stats["p75"].round(0).astype(int)
    stats["precio_m2_mediano"] = stats["precio_m2_mediano"].round(0).astype(int)
    return stats.to_dict(orient="records")


def build_impacto_features(
    model, X: pd.DataFrame, df: pd.DataFrame, feature_cols: list
) -> list:
    results = []

    # ── 1. Tipo de propiedad ──────────────────────────────────────────────────
    for col, label, zero_col in [
        ("es_ph",   "PH vs Departamento",  "es_casa"),
        ("es_casa", "Casa vs Departamento", "es_ph"),
    ]:
        if col not in feature_cols:
            continue
        X_con = X.copy(); X_sin = X.copy()
        X_con[col] = 1;   X_sin[col] = 0
        if zero_col in feature_cols:
            X_con[zero_col] = 0; X_sin[zero_col] = 0
        delta = float(np.mean(np.expm1(model.predict(X_con)) - np.expm1(model.predict(X_sin))))
        n_con = int(df[col].sum())
        results.append({
            "key":        col,
            "label":      label,
            "delta_usd":  round(delta, 0),
            "precio_con": round(float(np.expm1(model.predict(X_con)).mean()), 0),
            "precio_sin": round(float(np.expm1(model.predict(X_sin)).mean()), 0),
            "n_con":      n_con,
            "pct_con":    round(n_con / len(df) * 100, 1),
        })

    # ── 2. Ambientes (m² constante) ───────────────────────────────────────────
    for amb_to, amb_from, label in [
        (2, 1, "2 ambientes vs monoambiente"),
        (3, 2, "3 ambientes vs 2 ambientes"),
        (4, 3, "4 ambientes vs 3 ambientes"),
    ]:
        X_to = X.copy(); X_from = X.copy()
        for Xm, amb in [(X_to, amb_to), (X_from, amb_from)]:
            Xm["ambientes"]       = amb
            Xm["dormitorios"]     = max(0, amb - 1)
            Xm["m2_por_ambiente"] = (X["m2_total"] / amb).round(2)
            Xm["es_monoambiente"] = int(amb == 1)
        delta = float(np.mean(np.expm1(model.predict(X_to)) - np.expm1(model.predict(X_from))))
        n_con = int((df["ambientes"] == amb_to).sum())
        results.append({
            "key":        f"amb_{amb_to}_vs_{amb_from}",
            "label":      label,
            "delta_usd":  round(delta, 0),
            "precio_con": round(float(np.expm1(model.predict(X_to)).mean()), 0),
            "precio_sin": round(float(np.expm1(model.predict(X_from)).mean()), 0),
            "n_con":      n_con,
            "pct_con":    round(n_con / len(df) * 100, 1),
        })

    # ── 3. Baño adicional ─────────────────────────────────────────────────────
    X_2b = X.copy(); X_1b = X.copy()
    X_2b["banos"] = 2; X_1b["banos"] = 1
    delta = float(np.mean(np.expm1(model.predict(X_2b)) - np.expm1(model.predict(X_1b))))
    n_2b  = int((df["banos"] >= 2).sum())
    results.append({
        "key":        "banos_2vs1",
        "label":      "2 banos vs 1 bano",
        "delta_usd":  round(delta, 0),
        "precio_con": round(float(np.expm1(model.predict(X_2b)).mean()), 0),
        "precio_sin": round(float(np.expm1(model.predict(X_1b)).mean()), 0),
        "n_con":      n_2b,
        "pct_con":    round(n_2b / len(df) * 100, 1),
    })

    results.sort(key=lambda x: abs(x["delta_usd"]), reverse=True)
    return results


def build_feature_importances(model, feature_cols: list) -> list:
    pairs = sorted(zip(feature_cols, model.feature_importances_), key=lambda x: -x[1])
    return [
        {
            "feature":    feat,
            "label":      FEATURE_LABELS.get(feat, feat),
            "importance": round(float(imp), 4),
        }
        for feat, imp in pairs
    ]


def build_predictor(
    model,
    df: pd.DataFrame,
    feature_cols: list,
    le_barrio: LabelEncoder,
    le_prop: LabelEncoder,
    barrio_med: pd.Series,
    barrio_tipo_med: pd.Series,
) -> dict:
    barrios_lista = sorted(df["barrio"].unique().tolist())
    ratio_med     = float(df["ratio_cubierto"].median())
    global_med    = float(barrio_med.median())

    # Medianas de features geo y temporales para usar como defaults
    geo_defaults  = {feat: float(df[feat].median()) for feat in GEO_FEATURES if feat in df.columns}
    dias_med      = int(df["dias_en_mercado"].median()) if "dias_en_mercado" in df.columns else 60

    precios = {}
    for barrio in barrios_lista:
        barrio_enc   = int(le_barrio.transform([barrio])[0])
        barrio_price = float(barrio_med.get(barrio, global_med))
        precios[barrio] = {}

        for prop_type in PROPERTY_TYPES:
            if prop_type not in le_prop.classes_:
                continue
            prop_enc  = int(le_prop.transform([prop_type])[0])
            es_ph     = int(prop_type == "Ph")
            es_casa   = int(prop_type == "Casa")

            # precio_med_barrio_tipo: lookup por (barrio, prop_type) o fallback a barrio
            bt_key      = (barrio, prop_type)
            bt_price    = float(barrio_tipo_med.get(bt_key, barrio_price))
            precios[barrio][prop_type] = {}

            for amb in AMBIENTES_GRID:
                filas = []
                for m2 in M2_GRID:
                    banos = 1 if amb <= 2 else 2
                    fila  = {col: 0 for col in feature_cols}
                    fila.update({
                        "barrio_enc":             barrio_enc,
                        "precio_med_barrio":      barrio_price,
                        "precio_med_barrio_tipo": bt_price,
                        "m2_total":               m2,
                        "m2_cubierto":            round(m2 * ratio_med, 1),
                        "ratio_cubierto":         ratio_med,
                        "ambientes":              amb,
                        "dormitorios":            max(0, amb - 1),
                        "banos":                  banos,
                        "property_enc":           prop_enc,
                        "m2_por_ambiente":        round(m2 / amb, 2),
                        "m2_por_bano":            round(m2 / max(1, banos), 2),
                        "banos_por_ambiente":     round(banos / amb, 3),
                        "es_monoambiente":        int(amb == 1),
                        "es_ph":                  es_ph,
                        "es_casa":                es_casa,
                        "dias_en_mercado":        dias_med,
                        "mes_publicacion":        6,
                        **geo_defaults,
                    })
                    filas.append(fila)

                preds = np.expm1(model.predict(pd.DataFrame(filas)[feature_cols]))
                precios[barrio][prop_type][str(amb)] = [
                    max(0, round(float(p), 0)) for p in preds
                ]

    return {
        "barrios":        barrios_lista,
        "m2_grid":        M2_GRID,
        "ambientes_grid": AMBIENTES_GRID,
        "property_types": PROPERTY_TYPES,
        "precios":        precios,
    }


# ─── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--fast",   action="store_true", help="20 trials (desarrollo)")
    parser.add_argument("--trials", type=int,            help="numero de trials Optuna")
    args = parser.parse_args()

    n_trials = 20 if args.fast else (args.trials or 100)

    if not DATA_PATH.exists():
        print(f"No se encontro {DATA_PATH}")
        print("Ejecuta primero: python scripts/clean_data_venta.py")
        return

    print("Cargando y preparando features...")
    df, le_barrio, le_prop = load_and_engineer(DATA_PATH)

    # Split indices antes de calcular precio_med_barrio (evita leakage)
    train_idx, test_idx = train_test_split(df.index, test_size=0.2, random_state=42)
    y_raw = df["price_usd"]
    barrio_med = y_raw.loc[train_idx].groupby(df.loc[train_idx, "barrio"]).median()
    df["precio_med_barrio"] = df["barrio"].map(barrio_med).fillna(float(y_raw.loc[train_idx].median()))

    # precio_med_barrio_tipo: mediana por barrio × property_type — solo desde train (sin leakage)
    barrio_tipo_med = (
        y_raw.loc[train_idx]
        .groupby([df.loc[train_idx, "barrio"], df.loc[train_idx, "property_type"]])
        .median()
    )
    df["precio_med_barrio_tipo"] = (
        pd.MultiIndex.from_arrays([df["barrio"], df["property_type"]])
        .map(barrio_tipo_med.to_dict())
    )
    df["precio_med_barrio_tipo"] = df["precio_med_barrio_tipo"].fillna(df["precio_med_barrio"])

    y_log = np.log1p(y_raw)

    print(f"  Registros:           {len(df):,}")
    print(f"  Barrios:             {df['barrio'].nunique()}")
    print(f"  Precio USD mediana:  ${y_raw.median():,.0f}")
    print(f"  Precio/m2 mediana:   ${df['precio_por_m2'].median():,.0f}/m2")

    feature_cols = get_feature_cols(df)
    X = df[feature_cols]
    X_train     = X.loc[train_idx]
    X_test      = X.loc[test_idx]
    y_train_log = y_log.loc[train_idx]
    y_test_raw  = y_raw.loc[test_idx]

    print(f"\nOptimizando hiperparametros ({n_trials} trials de Optuna)...")
    best_params = tune(X_train, y_train_log, n_trials)
    print(f"  Mejor MAE CV: {best_params}")

    print("\nEntrenando modelo final con mejores parametros...")
    model, metrics = train_final(X_train, X_test, y_train_log, y_test_raw, best_params)
    print(f"\n  {'Split':<10} {'R²':>7}  {'MAE (USD)':>12}  {'MAPE':>6}")
    print(f"  {'Train':<10} {metrics['train_r2']:>7.4f}  {metrics['train_mae']:>12,.0f}  {metrics['train_mape']:>5.1f}%")
    print(f"  {'Val (ES)':<10} {metrics['val_r2']:>7.4f}  {metrics['val_mae']:>12,.0f}  {metrics['val_mape']:>5.1f}%")
    print(f"  {'Test':<10} {metrics['r2']:>7.4f}  {metrics['mae']:>12,.0f}  {metrics['mape']:>5.1f}%")
    print(f"\n  RMSE:  USD {metrics['rmse']:,.0f}")
    print(f"  +-15%: {metrics['pct_dentro_15']}% de las predicciones dentro del rango")

    print("\nCalculando estadisticas del mercado...")
    results = {
        "meta": {
            "tipo":        "venta",
            "moneda":      "USD",
            "fecha_datos": "2020",
            "fuente":      "Properati / ZonaProp",
            "algoritmo":   "XGBoost",
        },
        "modelo":              metrics,
        "hiperparametros":     best_params,
        "kpis":                build_kpis(df),
        "distribucion":        build_distribucion(df),
        "barrios":             build_barrios(df),
        "impacto_features":    build_impacto_features(model, X, df, feature_cols),
        "feature_importances": build_feature_importances(model, feature_cols),
        "predictor":           build_predictor(model, df, feature_cols, le_barrio, le_prop, barrio_med, barrio_tipo_med),
    }

    with open(OUT_JSON, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"\nExportado: {OUT_JSON}")

    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("const VENTA_DATA = ")
        json.dump(results, f, ensure_ascii=False, indent=2)
        f.write(";")
    print(f"Exportado: {OUT_JS}")


if __name__ == "__main__":
    main()
