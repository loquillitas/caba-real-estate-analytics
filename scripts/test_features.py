"""
test_features.py — harness de comparación de features candidatas.

Parámetros fijos (mejor trial producción) para aislar el impacto de cada feature.
Baseline correcto: incluye precio_med_barrio calculado sin leakage.
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

# Mejor trial — 100 trials producción, 2026-05-20, CV log-MAE=0.0760
BEST_PARAMS = {
    "n_estimators":     806,
    "max_depth":        8,
    "learning_rate":    0.04256,
    "subsample":        0.9140,
    "colsample_bytree": 0.6756,
    "min_child_weight": 1,
    "reg_alpha":        0.0626,
    "reg_lambda":       0.000220,
}

AMENITY_EDIFICIO  = ["pileta", "gimnasio", "sum", "parrilla",
                     "seguridad_24hs", "ascensor", "solarium", "laundry", "cowork"]
AMENITY_DEPTO     = ["balcon", "terraza", "patio", "jardin", "baulera",
                     "aire_acondicionado", "calefaccion", "amoblado"]
AMENITY_CONDICION = ["apto_profesional", "acepta_mascotas", "apto_credito"]
ALL_AMENITIES     = AMENITY_EDIFICIO + AMENITY_DEPTO + AMENITY_CONDICION

# Encoding ordinal de disposicion por precio mediano observado
DISPOSICION_MAP = {"Frente": 3, "Contrafrente": 2, "Interno": 1, "Lateral": 0}

# Encoding ordinal de estado por calidad declarada
ESTADO_MAP = {
    "A estrenar": 5, "Excelente": 4, "Muy bueno": 3,
    "Bueno": 2, "Reciclado": 1, "A reciclar": 0,
}

# Encoding de publisher_type
PUBLISHER_MAP = {
    "Inmobiliaria": 2, "Desarrolladora": 2,
    "Particular": 1,
    "Emprendimiento": 1,
}


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

    # disposicion — ordinal (missing = -1: categoría separada que XGBoost puede aprender)
    df["disposicion_enc"] = df["disposicion"].map(DISPOSICION_MAP).fillna(-1).astype(int)

    # estado — ordinal (missing = mediana de la distribución = 3)
    df["estado_enc"] = df["estado"].map(ESTADO_MAP).fillna(3).astype(float)

    # ratios adicionales
    df["m2_por_bano"]       = (df["superficie"] / df["banos"].replace(0, 1)).round(2)
    df["banos_por_ambiente"] = (df["banos"] / df["ambientes"]).round(3)

    # publisher_type (missing = 1: sin información)
    if "publisher_type" in df.columns:
        df["publisher_enc"] = df["publisher_type"].map(PUBLISHER_MAP).fillna(1).astype(int)

    le = LabelEncoder()
    df["barrio_enc"] = le.fit_transform(df["barrio"])
    return df


BASE_FEATURES = [
    "barrio_enc", "precio_med_barrio",
    "superficie", "ambientes", "dormitorios", "banos", "cochera_cantidad",
    "m2_por_ambiente", "amenity_score_edificio", "amenity_score_depto",
    "es_monoambiente", "tiene_espacio_exterior", "es_edificio_premium",
] + ALL_AMENITIES


def evaluate(X_tr, X_te, ytr_log, yte_raw, label):
    kf = KFold(n_splits=5, shuffle=True, random_state=42)
    cv_maes = []
    for tr, va in kf.split(X_tr):
        m = XGBRegressor(**BEST_PARAMS, random_state=42, n_jobs=-1, verbosity=0)
        m.fit(X_tr.iloc[tr], ytr_log.iloc[tr])
        cv_maes.append(mean_absolute_error(ytr_log.iloc[va], m.predict(X_tr.iloc[va])))
    cv_mae = np.mean(cv_maes)

    model = XGBRegressor(**BEST_PARAMS, random_state=42, n_jobs=-1, verbosity=0)
    model.fit(X_tr, ytr_log)
    y_pred = np.expm1(model.predict(X_te))
    mae  = mean_absolute_error(yte_raw, y_pred)
    mape = np.mean(np.abs((yte_raw - y_pred) / yte_raw)) * 100
    r2   = r2_score(yte_raw, y_pred)
    p15  = np.mean(np.abs(y_pred - yte_raw) <= yte_raw * 0.15) * 100

    print(f"  {label:<60}  CV={cv_mae:.4f}  R2={r2:.4f}  MAE=${mae:.0f}  MAPE={mape:.1f}%  +-15%={p15:.1f}%")
    return cv_mae


def main():
    print("Cargando datos...")
    df = load_base(DATA_PATH)
    print(f"  {len(df):,} registros | {df['barrio'].nunique()} barrios\n")

    y_raw = df["price_ref_usd"]
    y_log = np.log1p(y_raw)

    # Split fijo — precio_med_barrio calculado solo desde train (sin leakage)
    train_idx, test_idx = train_test_split(df.index, test_size=0.2, random_state=42)
    barrio_med = y_raw.loc[train_idx].groupby(df.loc[train_idx, "barrio"]).median()
    df["precio_med_barrio"] = df["barrio"].map(barrio_med).fillna(y_raw.loc[train_idx].median())

    ytr_log = y_log.loc[train_idx]
    yte_raw = y_raw.loc[test_idx]

    def Xslice(feats):
        cols = [c for c in feats if c in df.columns]
        return df[cols].loc[train_idx], df[cols].loc[test_idx]

    print("Feature testing — parámetros fijos, 5-fold CV log-MAE")
    print("=" * 105)

    # ── Baseline producción ───────────────────────────────────────────────────
    print("\n[BASELINE]")
    Xtr, Xte = Xslice(BASE_FEATURES)
    base_cv = evaluate(Xtr, Xte, ytr_log, yte_raw, "Baseline producción (37 features)")

    # ── disposicion ───────────────────────────────────────────────────────────
    print("\n[DISPOSICION]")
    feats_d = BASE_FEATURES + ["disposicion_enc"]
    Xtr, Xte = Xslice(feats_d)
    evaluate(Xtr, Xte, ytr_log, yte_raw, "+ disposicion_enc (ordinal: Frente=3..Lateral=0, missing=-1)")

    # ── estado ────────────────────────────────────────────────────────────────
    print("\n[ESTADO]")
    feats_e = BASE_FEATURES + ["estado_enc"]
    Xtr, Xte = Xslice(feats_e)
    evaluate(Xtr, Xte, ytr_log, yte_raw, "+ estado_enc (ordinal: A estrenar=5..A reciclar=0, missing=3)")

    # ── ratios ────────────────────────────────────────────────────────────────
    print("\n[RATIOS]")
    feats_r1 = BASE_FEATURES + ["m2_por_bano"]
    Xtr, Xte = Xslice(feats_r1)
    evaluate(Xtr, Xte, ytr_log, yte_raw, "+ m2_por_bano (superficie / banos)")

    feats_r2 = BASE_FEATURES + ["banos_por_ambiente"]
    Xtr, Xte = Xslice(feats_r2)
    evaluate(Xtr, Xte, ytr_log, yte_raw, "+ banos_por_ambiente (banos / ambientes)")

    feats_r3 = BASE_FEATURES + ["m2_por_bano", "banos_por_ambiente"]
    Xtr, Xte = Xslice(feats_r3)
    evaluate(Xtr, Xte, ytr_log, yte_raw, "+ m2_por_bano + banos_por_ambiente")

    # ── publisher_type ────────────────────────────────────────────────────────
    if "publisher_enc" in df.columns:
        print("\n[PUBLISHER TYPE]")
        feats_p = BASE_FEATURES + ["publisher_enc"]
        Xtr, Xte = Xslice(feats_p)
        evaluate(Xtr, Xte, ytr_log, yte_raw, "+ publisher_enc (inmobiliaria=2, particular=1, missing=1)")

    # ── combinaciones ─────────────────────────────────────────────────────────
    print("\n[COMBINACIONES]")
    feats_combo1 = BASE_FEATURES + ["disposicion_enc", "m2_por_bano"]
    Xtr, Xte = Xslice(feats_combo1)
    evaluate(Xtr, Xte, ytr_log, yte_raw, "+ disposicion + m2_por_bano")

    feats_combo2 = BASE_FEATURES + ["disposicion_enc", "estado_enc"]
    Xtr, Xte = Xslice(feats_combo2)
    evaluate(Xtr, Xte, ytr_log, yte_raw, "+ disposicion + estado")

    feats_combo3 = BASE_FEATURES + ["disposicion_enc", "estado_enc", "m2_por_bano"]
    Xtr, Xte = Xslice(feats_combo3)
    evaluate(Xtr, Xte, ytr_log, yte_raw, "+ disposicion + estado + m2_por_bano")

    if "publisher_enc" in df.columns:
        feats_combo4 = BASE_FEATURES + ["disposicion_enc", "estado_enc", "m2_por_bano", "publisher_enc"]
        Xtr, Xte = Xslice(feats_combo4)
        evaluate(Xtr, Xte, ytr_log, yte_raw, "+ disposicion + estado + m2_por_bano + publisher")

    print("\n" + "=" * 105)
    print("Referencia: CV < baseline = mejora. Métrica principal: CV log-MAE.")


if __name__ == "__main__":
    main()
