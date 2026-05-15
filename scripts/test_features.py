"""
test_features.py — comparación rápida de nuevas features candidatas.

Usa parámetros fijos (del mejor trial documentado) para evitar ruido de Optuna.
Evalúa con 5-fold CV sobre train y una pasada final sobre test.
"""

import warnings
import numpy as np
import pandas as pd
from pathlib import Path
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import KFold, train_test_split
from sklearn.preprocessing import LabelEncoder
from xgboost import XGBRegressor

warnings.filterwarnings("ignore")

BASE_DIR  = Path(__file__).parent.parent
DATA_PATH = BASE_DIR / "data" / "processed" / "alquileres_limpios.csv"

# Mejor trial documentado (50 trials producción, 2026-05-15, CV=0.0786)
BEST_PARAMS = {
    "n_estimators":     766,
    "max_depth":        8,
    "learning_rate":    0.0630,
    "subsample":        0.8783,
    "colsample_bytree": 0.6006,
    "min_child_weight": 4,
    "reg_alpha":        0.264,
    "reg_lambda":       1.903,
}

AMENITY_EDIFICIO  = ["pileta", "gimnasio", "sum", "parrilla",
                     "seguridad_24hs", "ascensor", "solarium", "laundry", "cowork"]
AMENITY_DEPTO     = ["balcon", "terraza", "patio", "jardin", "baulera",
                     "aire_acondicionado", "calefaccion", "amoblado"]
AMENITY_CONDICION = ["apto_profesional", "acepta_mascotas", "apto_credito"]
ALL_AMENITIES     = AMENITY_EDIFICIO + AMENITY_DEPTO + AMENITY_CONDICION


def load_base(path):
    df = pd.read_csv(path, low_memory=False)
    df["dormitorios"] = df["dormitorios"].fillna((df["ambientes"] - 1).clip(lower=0))
    df = df.dropna(subset=["barrio", "ambientes"]).copy()
    df["cochera_cantidad"] = df["cochera_cantidad"].fillna(0).astype(int)
    for col in ALL_AMENITIES:
        if col in df.columns:
            df[col] = df[col].fillna(False).astype(int)

    df["m2_por_ambiente"]        = (df["superficie"] / df["ambientes"]).round(2)
    df["amenity_score_edificio"] = df[[c for c in AMENITY_EDIFICIO if c in df.columns]].sum(axis=1)
    df["amenity_score_depto"]    = df[[c for c in AMENITY_DEPTO    if c in df.columns]].sum(axis=1)
    df["es_monoambiente"]        = (df["ambientes"] == 1).astype(int)
    df["tiene_espacio_exterior"] = df[["balcon","terraza","patio","jardin"]].any(axis=1).astype(int)
    df["es_edificio_premium"]    = (
        df["pileta"].astype(bool)
        & (df["gimnasio"].astype(bool) | df["sum"].astype(bool))
        & df["seguridad_24hs"].astype(bool)
    ).astype(int)

    le = LabelEncoder()
    df["barrio_enc"] = le.fit_transform(df["barrio"])
    return df


BASE_FEATURES = [
    "barrio_enc", "superficie", "ambientes", "dormitorios", "banos",
    "cochera_cantidad", "m2_por_ambiente",
    "amenity_score_edificio", "amenity_score_depto",
    "es_monoambiente", "tiene_espacio_exterior", "es_edificio_premium",
] + ALL_AMENITIES


def evaluate(X_train, X_test, y_train_log, y_test_raw, label):
    model = XGBRegressor(**BEST_PARAMS, random_state=42, n_jobs=-1, verbosity=0)

    kf = KFold(n_splits=5, shuffle=True, random_state=42)
    cv_maes = []
    for tr, va in kf.split(X_train):
        m = XGBRegressor(**BEST_PARAMS, random_state=42, n_jobs=-1, verbosity=0)
        m.fit(X_train.iloc[tr], y_train_log.iloc[tr])
        pred_log = m.predict(X_train.iloc[va])
        cv_maes.append(mean_absolute_error(y_train_log.iloc[va], pred_log))
    cv_mae_log = np.mean(cv_maes)

    model.fit(X_train, y_train_log)
    y_pred = np.expm1(model.predict(X_test))
    mae    = mean_absolute_error(y_test_raw, y_pred)
    rmse   = np.sqrt(mean_squared_error(y_test_raw, y_pred))
    mape   = np.mean(np.abs((y_test_raw - y_pred) / y_test_raw)) * 100
    r2     = r2_score(y_test_raw, y_pred)
    pct15  = np.mean(np.abs(y_pred - y_test_raw) <= y_test_raw * 0.15) * 100

    print(f"  {label:<55}  CV={cv_mae_log:.4f}  R2={r2:.4f}  MAE=${mae:.0f}  "
          f"RMSE=${rmse:.0f}  MAPE={mape:.1f}%  +-15%={pct15:.1f}%")


def main():
    print("Cargando datos...")
    df = load_base(DATA_PATH)
    y_raw = df["price_ref_usd"]
    y_log = np.log1p(y_raw)
    print(f"  {len(df):,} registros | {df['barrio'].nunique()} barrios\n")

    X_base = df[[c for c in BASE_FEATURES if c in df.columns]]
    X_tr0, X_te0, ytr_raw, yte_raw, ytr_log, _ = train_test_split(
        X_base, y_raw, y_log, test_size=0.2, random_state=42
    )
    train_idx = X_tr0.index
    test_idx  = X_te0.index

    print("Merge pileta+gimnasio — variantes (parámetros fijos, 5-fold CV):")
    print("-" * 110)

    # ── Baseline ──────────────────────────────────────────────────────────────
    evaluate(X_tr0, X_te0, ytr_log, yte_raw,
             "Baseline (pileta + gimnasio individuales + es_edificio_premium)")

    # ── Variante A: remover pileta y gimnasio, solo es_edificio_premium ───────
    feats_a = [c for c in BASE_FEATURES if c in df.columns and c not in ("pileta", "gimnasio")]
    Xa = df[feats_a]
    evaluate(Xa.loc[train_idx], Xa.loc[test_idx], ytr_log, yte_raw,
             "- pileta - gimnasio  (solo es_edificio_premium del cluster)")

    # ── Variante B: pileta OR gimnasio → tiene_premium, sin individuales ──────
    df_b = df.copy()
    df_b["tiene_premium"] = (df_b["pileta"].astype(bool) | df_b["gimnasio"].astype(bool)).astype(int)
    feats_b = [c for c in BASE_FEATURES if c in df_b.columns and c not in ("pileta", "gimnasio")] + ["tiene_premium"]
    Xb = df_b[feats_b]
    evaluate(Xb.loc[train_idx], Xb.loc[test_idx], ytr_log, yte_raw,
             "- pileta - gimnasio + tiene_premium (OR), mantiene es_edificio_premium")

    # ── Variante C: remover pileta, gimnasio y es_edificio_premium (solo score) ─
    feats_c = [c for c in BASE_FEATURES if c in df.columns
               and c not in ("pileta", "gimnasio", "es_edificio_premium")]
    Xc = df[feats_c]
    evaluate(Xc.loc[train_idx], Xc.loc[test_idx], ytr_log, yte_raw,
             "- pileta - gimnasio - es_edificio_premium  (solo amenity_score)")

    print("-" * 110)


if __name__ == "__main__":
    main()
