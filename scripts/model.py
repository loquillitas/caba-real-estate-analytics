"""
model.py — Modelo de precios de alquileres CABA 2026

QUÉ HACE:
  1. Carga el CSV limpio y agrega features el analísis exploratorio (features de amenities, m2 por ambiente, etc.)
  2. Entrena XGBoost con optimización bayesiana (Optuna, 50 trials por defecto)
  3. Exporta un JSON rico con todo lo que necesita el dashboard:
       - KPIs del mercado
       - Distribución de precios
       - Ranking de barrios
       - Impacto de amenities (efectos marginales del modelo)
       - Feature importances
       - Grilla de predicción para el estimador interactivo

"""

import argparse
import json
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
DATA_PATH = BASE_DIR / "data" / "processed" / "alquileres_limpios.csv"
OUT_JSON  = BASE_DIR / "output" / "results.json"
OUT_JS    = BASE_DIR / "web" / "data_alquiler.js"
OUT_JSON.parent.mkdir(parents=True, exist_ok=True)


# ─── Definición de features ────────────────────────────────────────────────────

AMENITY_EDIFICIO  = ["pileta", "gimnasio", "sum", "parrilla",
                     "seguridad_24hs", "ascensor", "solarium", "laundry", "cowork"]
AMENITY_DEPTO     = ["balcon", "terraza", "patio", "jardin", "baulera",
                     "aire_acondicionado", "calefaccion", "amoblado"]
AMENITY_CONDICION = ["apto_profesional", "acepta_mascotas", "apto_credito"]
ALL_AMENITIES     = AMENITY_EDIFICIO + AMENITY_DEPTO + AMENITY_CONDICION

AMENITY_LABELS = {
    "pileta":             "Pileta",
    "gimnasio":           "Gimnasio",
    "sum":                "SUM",
    "parrilla":           "Parrilla",
    "seguridad_24hs":     "Seguridad 24hs",
    "ascensor":           "Ascensor",
    "solarium":           "Solarium",
    "laundry":            "Laundry",
    "cowork":             "Cowork",
    "balcon":             "Balcón",
    "terraza":            "Terraza",
    "patio":              "Patio",
    "jardin":             "Jardín",
    "baulera":            "Baulera",
    "aire_acondicionado": "Aire acondicionado",
    "calefaccion":        "Calefacción",
    "amoblado":           "Amoblado",
    "apto_profesional":   "Apto profesional",
    "acepta_mascotas":    "Acepta mascotas",
    "apto_credito":       "Apto crédito",
}

DISPOSICION_MAP = {"Frente": 3, "Contrafrente": 2, "Interno": 1, "Lateral": 0}
ESTADO_MAP = {
    "A estrenar": 5, "Excelente": 4, "Muy bueno": 3,
    "Bueno": 2, "Reciclado": 1, "A reciclar": 0,
}
PUBLISHER_MAP = {
    "Inmobiliaria": 2, "Desarrolladora": 2,
    "Particular": 1, "Emprendimiento": 1,
}

FEATURE_LABELS = {
    "barrio_enc":              "Barrio",
    "precio_med_barrio":       "Precio mediano del barrio",
    "superficie":              "Superficie (m²)",
    "ambientes":               "Ambientes",
    "dormitorios":             "Dormitorios",
    "banos":                   "Baños",
    "cochera_cantidad":        "Cochera",
    "m2_por_ambiente":         "m² por ambiente",
    "m2_por_bano":             "m² por baño",
    "amenity_score_edificio":  "Score amenities edificio",
    "amenity_score_depto":     "Score amenities depto",
    "es_monoambiente":         "Es monoambiente",
    "tiene_espacio_exterior":  "Espacio exterior",
    "es_edificio_premium":     "Edificio premium",
    "disposicion_enc":         "Disposición",
    "estado_enc":              "Estado del inmueble",
    "publisher_enc":           "Tipo de publicador",
    **AMENITY_LABELS,
}

# Grilla de valores para el predictor interactivo
M2_GRID        = [25, 32, 38, 46, 55, 65, 80, 100, 130, 160]
AMBIENTES_GRID = [1, 2, 3, 4, 5]


# ─── Carga y feature engineering ──────────────────────────────────────────────

def load_and_engineer(path: Path) -> tuple[pd.DataFrame, LabelEncoder]:
    df = pd.read_csv(path, low_memory=False)

    # dormitorios: 28% nulos — casi todos son monoambientes, imputar amb-1
    df["dormitorios"] = df["dormitorios"].fillna(
        (df["ambientes"] - 1).clip(lower=0)
    )

    # eliminar filas sin barrio ni ambientes (< 3% en total)
    df = df.dropna(subset=["barrio", "ambientes"]).copy()

    # normalizar tipos
    df["cochera_cantidad"] = df["cochera_cantidad"].fillna(0).astype(int)
    for col in ALL_AMENITIES:
        if col in df.columns:
            df[col] = df[col].fillna(False).astype(int)

    # features derivadas
    df["m2_por_ambiente"]        = (df["superficie"] / df["ambientes"]).round(2)
    df["amenity_score_edificio"] = df[[c for c in AMENITY_EDIFICIO if c in df.columns]].sum(axis=1)
    df["amenity_score_depto"]    = df[[c for c in AMENITY_DEPTO    if c in df.columns]].sum(axis=1)
    df["es_monoambiente"]        = (df["ambientes"] == 1).astype(int)
    df["tiene_espacio_exterior"] = (
        df[["balcon", "terraza", "patio", "jardin"]].any(axis=1).astype(int)
    )
    df["es_edificio_premium"] = (
        df["pileta"].astype(bool)
        & (df["gimnasio"].astype(bool) | df["sum"].astype(bool))
        & df["seguridad_24hs"].astype(bool)
    ).astype(int)

    # disposicion — ordinal por precio observado (missing=-1: categoría propia)
    df["disposicion_enc"] = df["disposicion"].map(DISPOSICION_MAP).fillna(-1).astype(int)

    # estado — ordinal por calidad declarada (missing=3: mediana de la distribución)
    df["estado_enc"] = df["estado"].map(ESTADO_MAP).fillna(3).astype(float)

    # m2 por baño
    df["m2_por_bano"] = (df["superficie"] / df["banos"].replace(0, 1)).round(2)

    # publisher_type (missing=1)
    if "publisher_type" in df.columns:
        df["publisher_enc"] = df["publisher_type"].map(PUBLISHER_MAP).fillna(1).astype(int)

    # barrio → label encoding (XGBoost lo maneja bien con tree splits)
    le = LabelEncoder()
    df["barrio_enc"] = le.fit_transform(df["barrio"])

    return df, le


def get_feature_cols(df: pd.DataFrame) -> list[str]:
    base = [
        "barrio_enc", "precio_med_barrio", "superficie", "ambientes", "dormitorios", "banos",
        "cochera_cantidad", "m2_por_ambiente", "m2_por_bano",
        "amenity_score_edificio", "amenity_score_depto",
        "es_monoambiente", "tiene_espacio_exterior", "es_edificio_premium",
        "disposicion_enc", "estado_enc", "publisher_enc",
    ]
    amenities = [c for c in ALL_AMENITIES if c in df.columns]
    return [c for c in base if c in df.columns] + amenities


# ─── Optimización de hiperparámetros con Optuna ────────────────────────────────

def tune(X_train: pd.DataFrame, y_train: pd.Series, n_trials: int) -> dict:
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
                X_train.iloc[tr], y_train.iloc[tr],
                eval_set=[(X_train.iloc[va], y_train.iloc[va])],
                verbose=False,
            )
            maes.append(mean_absolute_error(y_train.iloc[va], m.predict(X_train.iloc[va])))
        return float(np.mean(maes))

    study = optuna.create_study(direction="minimize")
    study.optimize(objective, n_trials=n_trials, show_progress_bar=True)
    return study.best_params


def train_final(X_train, X_test, y_train_log, y_test_raw, y_train_raw, best_params: dict):
    # 10% del train como validación para early stopping (seed distinta al split principal)
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
            "mae":  round(mae, 2),
            "mape": round(float(np.mean(np.abs((y_true_raw - y_pred_raw) / y_true_raw)) * 100), 1),
        }

    tr_m  = _eval(np.expm1(y_tr),  np.expm1(model.predict(X_tr)))
    val_m = _eval(np.expm1(y_val), np.expm1(model.predict(X_val)))

    y_pred = np.expm1(model.predict(X_test))
    mae  = float(mean_absolute_error(y_test_raw, y_pred))
    rmse = float(np.sqrt(mean_squared_error(y_test_raw, y_pred)))
    mape = float(np.mean(np.abs((y_test_raw - y_pred) / y_test_raw)) * 100)
    pct15 = float(np.mean(np.abs(y_pred - y_test_raw) <= y_test_raw * 0.15) * 100)
    metrics = {
        "r2":            round(float(r2_score(y_test_raw, y_pred)), 4),
        "mae":           round(mae, 2),
        "rmse":          round(rmse, 2),
        "mae_pct":       round(mae / y_train_raw.mean() * 100, 1),
        "mape":          round(mape, 1),
        "pct_dentro_15": round(pct15, 1),
        "n_train":       int(len(X_train)),
        "n_test":        int(len(X_test)),
        "total_data":    int(len(X_train) + len(X_test)),
        "train_r2":      tr_m["r2"],
        "train_mae":     tr_m["mae"],
        "train_mape":    tr_m["mape"],
        "val_r2":        val_m["r2"],
        "val_mae":       val_m["mae"],
        "val_mape":      val_m["mape"],
    }
    return model, metrics


# ─── Construcción de los bloques de resultados ────────────────────────────────

def build_kpis(df: pd.DataFrame) -> dict:
    p = df["price_ref_usd"].quantile([0.1, 0.25, 0.5, 0.75, 0.9])
    return {
        "precio_mediano":    int(p[0.5]),
        "precio_m2_mediano": round(float(df["price_m2_usd"].median()), 1),
        "n_propiedades":     int(len(df)),
        "p10": int(p[0.1]),
        "p25": int(p[0.25]),
        "p75": int(p[0.75]),
        "p90": int(p[0.9]),
    }


def build_distribucion(df: pd.DataFrame) -> dict:
    # bins de $100 desde $300 hasta $3.000
    edges  = np.arange(300, 3100, 100)
    counts, edges = np.histogram(df["price_ref_usd"], bins=edges)
    return {
        "bins_edge": [int(e) for e in edges],
        "counts":    [int(c) for c in counts],
    }


def build_barrios(df: pd.DataFrame) -> list:
    stats = (
        df.groupby("barrio")["price_ref_usd"]
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
        df.groupby("barrio")["price_m2_usd"]
        .median()
        .rename("precio_m2_mediano")
        .reset_index()
    )
    stats = stats.merge(m2, on="barrio").sort_values("precio_mediano", ascending=False)
    stats["precio_mediano"]    = stats["precio_mediano"].round(0).astype(int)
    stats["p25"]               = stats["p25"].round(0).astype(int)
    stats["p75"]               = stats["p75"].round(0).astype(int)
    stats["precio_m2_mediano"] = stats["precio_m2_mediano"].round(1)
    return stats.to_dict(orient="records")


def build_impacto_amenities(
    model, X: pd.DataFrame, df: pd.DataFrame, feature_cols: list
) -> list:
    """
    Efecto marginal de cada amenity: predice cada propiedad con y sin el amenity,
    toma la media de la diferencia.

    Filtros aplicados antes de exportar:
      - pct_con >= 10%  (descartar amenities muy raros)
      - delta_raw >= 0  (descartar los que el modelo estima que bajan el precio)
    Esto elimina: cowork, solarium, baulera, jardín (baja prevalencia);
    terraza, calefacción, ascensor, laundry, apto_profesional, acepta_mascotas,
    apto_crédito, patio (efecto negativo — correlación con edificios viejos o
    menor demanda, no con calidad per se).
    """
    results = []

    # ── Amenities booleanos ───────────────────────────────────────────────────
    for col in ALL_AMENITIES:
        if col not in feature_cols:
            continue
        n_con = int(df[col].sum())
        if n_con < 50:
            continue

        X_con = X.copy()
        X_sin = X.copy()
        X_con[col] = 1
        X_sin[col] = 0

        if col in AMENITY_EDIFICIO and "amenity_score_edificio" in feature_cols:
            X_con["amenity_score_edificio"] = (X["amenity_score_edificio"]
                                               + (1 - X[col])).clip(upper=len(AMENITY_EDIFICIO))
            X_sin["amenity_score_edificio"] = (X["amenity_score_edificio"]
                                               - X[col]).clip(lower=0)
        if col in AMENITY_DEPTO and "amenity_score_depto" in feature_cols:
            X_con["amenity_score_depto"] = (X["amenity_score_depto"]
                                            + (1 - X[col])).clip(upper=len(AMENITY_DEPTO))
            X_sin["amenity_score_depto"] = (X["amenity_score_depto"]
                                            - X[col]).clip(lower=0)
        if col in ("balcon", "terraza", "patio", "jardin") and "tiene_espacio_exterior" in feature_cols:
            exterior_cols = [c for c in ("balcon", "terraza", "patio", "jardin") if c in feature_cols]
            X_con["tiene_espacio_exterior"] = X_con[exterior_cols].any(axis=1).astype(int)
            X_sin["tiene_espacio_exterior"] = X_sin[exterior_cols].any(axis=1).astype(int)

        pred_con = np.expm1(model.predict(X_con))
        pred_sin = np.expm1(model.predict(X_sin))
        delta = float((pred_con - pred_sin).mean())
        results.append({
            "key":        col,
            "label":      AMENITY_LABELS.get(col, col),
            "_delta_raw": delta,
            "delta_usd":  round(delta, 0),
            "precio_con": round(float(pred_con.mean()), 0),
            "precio_sin": round(float(pred_sin.mean()), 0),
            "n_con":      n_con,
            "pct_con":    round(n_con / len(df) * 100, 1),
        })

    # ── Cochera (feature numérica: > 0 vs = 0) ────────────────────────────────
    if "cochera_cantidad" in feature_cols:
        X_con = X.copy(); X_sin = X.copy()
        X_con["cochera_cantidad"] = 1
        X_sin["cochera_cantidad"] = 0
        pred_con = np.expm1(model.predict(X_con))
        pred_sin = np.expm1(model.predict(X_sin))
        delta = float((pred_con - pred_sin).mean())
        n_con = int((df["cochera_cantidad"] > 0).sum())
        results.append({
            "key":        "cochera",
            "label":      "Cochera",
            "_delta_raw": delta,
            "delta_usd":  round(delta, 0),
            "precio_con": round(float(pred_con.mean()), 0),
            "precio_sin": round(float(pred_sin.mean()), 0),
            "n_con":      n_con,
            "pct_con":    round(n_con / len(df) * 100, 1),
        })

    # ── Filtrar: prevalencia >= 10% y efecto no negativo ─────────────────────
    results = [r for r in results if r["pct_con"] >= 10.0 and r["_delta_raw"] >= 0]
    for r in results:
        del r["_delta_raw"]

    results.sort(key=lambda x: x["delta_usd"], reverse=True)
    return results


def build_feature_importances(model, feature_cols: list) -> list:
    pairs = sorted(zip(feature_cols, model.feature_importances_), key=lambda x: -x[1])
    return [
        {
            "feature":    feat,
            "label":      FEATURE_LABELS.get(feat, feat),
            "importance": round(float(imp), 4),
        }
        for feat, imp in pairs[:20]
    ]


def build_predictor(
    model, df: pd.DataFrame, feature_cols: list, le: LabelEncoder,
    barrio_med: pd.Series = None,
) -> dict:
    """
    Grilla de precios base (sin amenities) para el estimador interactivo.
    46 barrios × 5 ambientes × 10 m² = 2.300 predicciones.

    El browser calcula: precio = precios[barrio][ambientes][m2_idx] + Σ amenity_deltas
    """
    barrios_lista = sorted(df["barrio"].unique().tolist())
    global_med_precio = float(df["precio_med_barrio"].median()) if barrio_med is None else float(barrio_med.median())

    # ── grilla base ────────────────────────────────────────────────────────────
    precios = {}
    for barrio in barrios_lista:
        barrio_enc   = int(le.transform([barrio])[0])
        barrio_price = float(barrio_med.get(barrio, global_med_precio)) if barrio_med is not None else \
                       float(df.loc[df["barrio"] == barrio, "precio_med_barrio"].iloc[0])
        precios[barrio] = {}
        for amb in AMBIENTES_GRID:
            filas = []
            for m2 in M2_GRID:
                fila = {col: 0 for col in feature_cols}
                banos_ref = 1 if amb <= 2 else 2
                fila.update({
                    "barrio_enc":             barrio_enc,
                    "precio_med_barrio":      barrio_price,
                    "superficie":             m2,
                    "ambientes":              amb,
                    "dormitorios":            max(0, amb - 1),
                    "banos":                  banos_ref,
                    "cochera_cantidad":        0,
                    "m2_por_ambiente":        round(m2 / amb, 2),
                    "m2_por_bano":            round(m2 / banos_ref, 2),
                    "amenity_score_edificio": 0,
                    "amenity_score_depto":    0,
                    "es_monoambiente":        int(amb == 1),
                    "tiene_espacio_exterior": 0,
                    "es_edificio_premium":    0,
                    "disposicion_enc":        -1,   # desconocido
                    "estado_enc":             3,    # Muy bueno (mediana)
                    "publisher_enc":          1,    # desconocido
                })
                filas.append(fila)

            preds = np.expm1(model.predict(pd.DataFrame(filas)[feature_cols]))
            precios[barrio][str(amb)] = [max(0, round(float(p), 0)) for p in preds]

    # ── deltas de amenities (efecto marginal en propiedad mediana sin amenities) ──
    barrio_ref = df["barrio"].mode()[0]
    barrio_ref_enc   = int(le.transform([barrio_ref])[0])
    barrio_ref_price = float(barrio_med.get(barrio_ref, global_med_precio)) if barrio_med is not None else \
                       float(df.loc[df["barrio"] == barrio_ref, "precio_med_barrio"].iloc[0])
    fila_ref = {col: 0 for col in feature_cols}
    sup_med  = df["superficie"].median()
    amb_med  = df["ambientes"].median()
    bano_med = df["banos"].median()
    fila_ref.update({
        "barrio_enc":             barrio_ref_enc,
        "precio_med_barrio":      barrio_ref_price,
        "superficie":             int(sup_med),
        "ambientes":              int(amb_med),
        "dormitorios":            int(df["dormitorios"].median()),
        "banos":                  int(bano_med),
        "cochera_cantidad":        0,
        "m2_por_ambiente":        round(sup_med / amb_med, 2),
        "m2_por_bano":            round(sup_med / bano_med, 2),
        "amenity_score_edificio": 0,
        "amenity_score_depto":    0,
        "es_monoambiente":        0,
        "tiene_espacio_exterior": 0,
        "es_edificio_premium":    0,
        "disposicion_enc":        -1,
        "estado_enc":             3,
        "publisher_enc":          1,
    })

    amenity_deltas = {}
    for col in ALL_AMENITIES:
        if col not in feature_cols:
            continue
        f_sin = {**fila_ref, col: 0}
        f_con = {**fila_ref, col: 1}
        if col in AMENITY_EDIFICIO and "amenity_score_edificio" in feature_cols:
            f_con["amenity_score_edificio"] = 1
        if col in AMENITY_DEPTO and "amenity_score_depto" in feature_cols:
            f_con["amenity_score_depto"] = 1
        if col in ("balcon", "terraza", "patio", "jardin") and "tiene_espacio_exterior" in feature_cols:
            f_con["tiene_espacio_exterior"] = 1

        delta = float(
            np.expm1(model.predict(pd.DataFrame([f_con])[feature_cols])[0])
            - np.expm1(model.predict(pd.DataFrame([f_sin])[feature_cols])[0])
        )
        amenity_deltas[col] = round(delta, 0)

    return {
        "barrios":        barrios_lista,
        "m2_grid":        M2_GRID,
        "ambientes_grid": AMBIENTES_GRID,
        "precios":        precios,
        "amenity_deltas": amenity_deltas,
    }


# ─── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--fast",   action="store_true", help="20 trials (desarrollo)")
    parser.add_argument("--trials", type=int,            help="número de trials Optuna")
    args = parser.parse_args()

    n_trials = 20 if args.fast else (args.trials or 100)

    print("Cargando y preparando features...")
    df, le = load_and_engineer(DATA_PATH)
    print(f"  Registros:           {len(df):,}")
    print(f"  Barrios:             {df['barrio'].nunique()}")
    print(f"  Precio USD mediana:  ${df['price_ref_usd'].median():,.0f}/mes")

    y_raw = df["price_ref_usd"]
    y_log = np.log1p(y_raw)

    # Determinar índices de train/test antes de calcular precio_med_barrio
    # para evitar leakage (mediana del barrio calculada solo en train)
    train_idx, test_idx = train_test_split(df.index, test_size=0.2, random_state=42)
    barrio_med = y_raw.loc[train_idx].groupby(df.loc[train_idx, "barrio"]).median()
    df["precio_med_barrio"] = df["barrio"].map(barrio_med).fillna(y_raw.loc[train_idx].median())

    feature_cols = get_feature_cols(df)
    X = df[feature_cols]

    X_train = X.loc[train_idx]
    X_test  = X.loc[test_idx]
    y_train_raw = y_raw.loc[train_idx]
    y_test_raw  = y_raw.loc[test_idx]
    y_train_log = y_log.loc[train_idx]

    print(f"\nOptimizando hiperparámetros ({n_trials} trials de Optuna)...")
    best_params = tune(X_train, y_train_log, n_trials)
    print(f"  Mejor MAE CV: {best_params}")

    print("\nEntrenando modelo final con mejores parámetros...")
    model, metrics = train_final(X_train, X_test, y_train_log, y_test_raw, y_train_raw, best_params)
    print(f"\n  {'Split':<10} {'R²':>7}  {'MAE (USD/mes)':>14}  {'MAPE':>6}")
    print(f"  {'Train':<10} {metrics['train_r2']:>7.4f}  {metrics['train_mae']:>14,.0f}  {metrics['train_mape']:>5.1f}%")
    print(f"  {'Val (ES)':<10} {metrics['val_r2']:>7.4f}  {metrics['val_mae']:>14,.0f}  {metrics['val_mape']:>5.1f}%")
    print(f"  {'Test':<10} {metrics['r2']:>7.4f}  {metrics['mae']:>14,.0f}  {metrics['mape']:>5.1f}%")
    print(f"\n  RMSE:  USD {metrics['rmse']:,.0f}/mes")
    print(f"  ±15%:  {metrics['pct_dentro_15']}% de las predicciones dentro del rango")

    print("\nCalculando estadísticas del mercado...")
    results = {
        "meta": {
            "tipo":        "alquiler",
            "moneda":      "USD",
            "fecha_datos": "marzo 2026",
            "fuente":      "ZonaProp",
            "algoritmo":   "XGBoost",
        },
        "modelo":              metrics,
        "hiperparametros":     best_params,
        "kpis":                build_kpis(df),
        "distribucion":        build_distribucion(df),
        "barrios":             build_barrios(df),
        "impacto_amenities":   build_impacto_amenities(model, X, df, feature_cols),
        "feature_importances": build_feature_importances(model, feature_cols),
        "predictor":           build_predictor(model, df, feature_cols, le, barrio_med),
    }

    with open(OUT_JSON, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"\nExportado: {OUT_JSON}")

    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write("const ALQUILER_DATA = ")
        json.dump(results, f, ensure_ascii=False, indent=2)
        f.write(";")
    print(f"Exportado: {OUT_JS}")


if __name__ == "__main__":
    main()
