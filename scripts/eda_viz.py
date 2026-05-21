"""
eda_viz.py — Visualizaciones exploratorias del dataset de alquileres limpio.
Genera PNGs en output/eda/.
"""

import warnings
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import seaborn as sns
from pathlib import Path
from sklearn.preprocessing import LabelEncoder
from statsmodels.nonparametric.smoothers_lowess import lowess

warnings.filterwarnings("ignore")
plt.rcParams.update({"font.family": "sans-serif", "font.size": 10})

BASE_DIR  = Path(__file__).parent.parent
DATA_PATH = BASE_DIR / "data" / "processed" / "alquileres_limpios.csv"
OUT_DIR   = BASE_DIR / "output" / "eda"
OUT_DIR.mkdir(parents=True, exist_ok=True)

AMENITY_EDIFICIO  = ["pileta", "gimnasio", "sum", "parrilla",
                     "seguridad_24hs", "ascensor", "solarium", "laundry", "cowork"]
AMENITY_DEPTO     = ["balcon", "terraza", "patio", "jardin", "baulera",
                     "aire_acondicionado", "calefaccion", "amoblado"]
AMENITY_CONDICION = ["apto_profesional", "acepta_mascotas", "apto_credito"]
ALL_AMENITIES     = AMENITY_EDIFICIO + AMENITY_DEPTO + AMENITY_CONDICION

AMENITY_LABELS = {
    "pileta": "Pileta", "gimnasio": "Gimnasio", "sum": "SUM",
    "parrilla": "Parrilla", "seguridad_24hs": "Seg 24hs", "ascensor": "Ascensor",
    "solarium": "Solarium", "laundry": "Laundry", "cowork": "Cowork",
    "balcon": "Balcon", "terraza": "Terraza", "patio": "Patio",
    "jardin": "Jardin", "baulera": "Baulera", "aire_acondicionado": "A/C",
    "calefaccion": "Calef.", "amoblado": "Amoblado",
    "apto_profesional": "Ap. Prof.", "acepta_mascotas": "Mascotas", "apto_credito": "Credito",
}


def load():
    df = pd.read_csv(DATA_PATH, low_memory=False)
    df["dormitorios"] = df["dormitorios"].fillna((df["ambientes"] - 1).clip(lower=0))
    df = df.dropna(subset=["barrio", "ambientes"]).copy()
    df["cochera_cantidad"] = df["cochera_cantidad"].fillna(0).astype(int)
    for col in ALL_AMENITIES:
        if col in df.columns:
            df[col] = df[col].fillna(False).astype(int)
    df["amenity_score_edificio"] = df[[c for c in AMENITY_EDIFICIO if c in df.columns]].sum(axis=1)
    df["m2_por_ambiente"] = (df["superficie"] / df["ambientes"]).round(2)
    le = LabelEncoder()
    df["barrio_enc"] = le.fit_transform(df["barrio"])
    return df


# ── 1. Heatmap de correlación — features numéricas vs precio ──────────────────

def plot_correlation(df):
    num_cols = [
        "superficie", "ambientes", "dormitorios", "banos", "cochera_cantidad",
        "m2_por_ambiente", "amenity_score_edificio",
        "pileta", "gimnasio", "amoblado", "ascensor", "seguridad_24hs",
        "aire_acondicionado", "balcon", "sum", "parrilla",
        "price_ref_usd",
    ]
    sub = df[[c for c in num_cols if c in df.columns]]
    corr = sub.corr()

    fig, ax = plt.subplots(figsize=(12, 10))
    mask = np.zeros_like(corr, dtype=bool)
    mask[np.triu_indices_from(mask)] = True
    sns.heatmap(
        corr, mask=mask, annot=True, fmt=".2f", cmap="RdYlGn",
        center=0, vmin=-1, vmax=1, linewidths=0.4,
        annot_kws={"size": 8}, ax=ax,
    )
    ax.set_title("Correlacion entre features y precio (USD)", pad=14, fontsize=12, fontweight="bold")
    plt.tight_layout()
    out = OUT_DIR / "01_correlacion.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")

    # Correlaciones con price_ref_usd ordenadas
    corr_precio = corr["price_ref_usd"].drop("price_ref_usd").sort_values(ascending=False)
    print("\n  Top correlaciones con precio USD:")
    for feat, val in corr_precio.head(10).items():
        print(f"    {feat:<30} {val:+.3f}")


# ── 2. Heatmap de co-ocurrencia de amenities ──────────────────────────────────

def plot_amenity_coocurrence(df):
    cols = [c for c in AMENITY_EDIFICIO if c in df.columns]
    labels = [AMENITY_LABELS.get(c, c) for c in cols]

    # Frecuencia condicional: P(A | B) = prop con ambos / prop con B
    mat = np.zeros((len(cols), len(cols)))
    for i, ci in enumerate(cols):
        for j, cj in enumerate(cols):
            if i == j:
                mat[i, j] = df[ci].mean()
            else:
                has_j = df[cj] == 1
                mat[i, j] = df.loc[has_j, ci].mean() if has_j.sum() > 0 else 0

    fig, ax = plt.subplots(figsize=(13, 11))
    sns.heatmap(
        mat, xticklabels=labels, yticklabels=labels,
        annot=True, fmt=".0%", cmap="Blues",
        linewidths=0.3, annot_kws={"size": 7}, ax=ax,
    )
    ax.set_title(
        "Co-ocurrencia de amenities\nValor = % de propiedades con la fila que TAMBIEN tienen la columna",
        pad=12, fontsize=11, fontweight="bold"
    )
    plt.xticks(rotation=45, ha="right")
    plt.yticks(rotation=0)
    plt.tight_layout()
    out = OUT_DIR / "02_coocurrencia_amenities.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


# ── 3. Precio por barrio — boxplot completo ───────────────────────────────────

def plot_precio_barrio(df):
    medians = df.groupby("barrio")["price_ref_usd"].median().sort_values(ascending=False)
    ordered = medians.index.tolist()

    fig, ax = plt.subplots(figsize=(14, 8))
    data_ordered = [df[df["barrio"] == b]["price_ref_usd"].values for b in ordered]
    bp = ax.boxplot(
        data_ordered, vert=True, patch_artist=True, showfliers=False,
        medianprops=dict(color="black", linewidth=1.5),
        boxprops=dict(facecolor="#e8e8e8", linewidth=0.7),
        whiskerprops=dict(linewidth=0.7), capprops=dict(linewidth=0.7),
    )
    ax.set_xticks(range(1, len(ordered) + 1))
    ax.set_xticklabels(ordered, rotation=55, ha="right", fontsize=7.5)
    ax.yaxis.set_major_formatter(mticker.FuncFormatter(lambda x, _: f"${x:,.0f}"))
    ax.set_ylabel("Precio mensual (USD)")
    ax.set_title("Distribucion de precios por barrio (sin outliers extremos)", fontweight="bold")
    ax.grid(axis="y", linewidth=0.4, alpha=0.5)
    plt.tight_layout()
    out = OUT_DIR / "03_precio_por_barrio.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


# ── 4. Scatter: superficie vs precio, coloreado por ambientes ─────────────────

def plot_scatter_m2_precio(df):
    fig, axes = plt.subplots(1, 2, figsize=(14, 5))

    # A: m2 vs precio, colorear por ambientes
    amb_max = min(5, int(df["ambientes"].max()))
    cmap = plt.cm.get_cmap("tab10", amb_max)
    for amb in range(1, amb_max + 1):
        sub = df[df["ambientes"] == amb]
        axes[0].scatter(sub["superficie"], sub["price_ref_usd"],
                        alpha=0.15, s=6, color=cmap(amb - 1), label=f"{amb} amb")
    axes[0].set_xlabel("Superficie (m2)")
    axes[0].set_ylabel("Precio USD/mes")
    axes[0].set_title("Superficie vs Precio por ambientes")
    axes[0].legend(markerscale=3, fontsize=8)
    axes[0].yaxis.set_major_formatter(mticker.FuncFormatter(lambda x, _: f"${x:,.0f}"))
    axes[0].set_xlim(0, 300)
    axes[0].set_ylim(0, 4000)

    # B: m2/ambiente vs precio (proxy de espacio por cuarto)
    axes[1].scatter(df["m2_por_ambiente"], df["price_ref_usd"],
                    alpha=0.1, s=5, color="#333")
    axes[1].set_xlabel("m2 por ambiente")
    axes[1].set_ylabel("Precio USD/mes")
    axes[1].set_title("m2/ambiente vs Precio")
    axes[1].yaxis.set_major_formatter(mticker.FuncFormatter(lambda x, _: f"${x:,.0f}"))
    axes[1].set_xlim(0, 120)
    axes[1].set_ylim(0, 4000)

    plt.tight_layout()
    out = OUT_DIR / "04_scatter_m2_precio.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


# ── 5. Precio mediano por numero de banos y ambientes (heatmap) ───────────────

def plot_heatmap_amb_banos(df):
    pivot = (
        df[df["ambientes"].between(1, 5) & df["banos"].between(1, 4)]
        .groupby(["ambientes", "banos"])["price_ref_usd"]
        .median()
        .unstack("banos")
        .sort_index(ascending=False)
    )
    counts = (
        df[df["ambientes"].between(1, 5) & df["banos"].between(1, 4)]
        .groupby(["ambientes", "banos"])
        .size()
        .unstack("banos")
        .sort_index(ascending=False)
    )

    fig, axes = plt.subplots(1, 2, figsize=(13, 4))

    sns.heatmap(pivot, annot=True, fmt=".0f", cmap="YlOrRd",
                linewidths=0.5, ax=axes[0],
                annot_kws={"size": 9})
    axes[0].set_title("Precio mediano USD por ambientes x banos", fontweight="bold")
    axes[0].set_ylabel("Ambientes")
    axes[0].set_xlabel("Banos")

    sns.heatmap(counts, annot=True, fmt=".0f", cmap="Blues",
                linewidths=0.5, ax=axes[1],
                annot_kws={"size": 9})
    axes[1].set_title("N propiedades por ambientes x banos", fontweight="bold")
    axes[1].set_ylabel("Ambientes")
    axes[1].set_xlabel("Banos")

    plt.tight_layout()
    out = OUT_DIR / "05_heatmap_amb_banos.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


# ── 6. Delta de precio por amenity con intervalos de confianza ────────────────

def plot_amenity_delta(df):
    results = []
    for col in ALL_AMENITIES:
        if col not in df.columns:
            continue
        con = df[df[col] == 1]["price_ref_usd"]
        sin = df[df[col] == 0]["price_ref_usd"]
        if len(con) < 200:
            continue
        delta = con.median() - sin.median()
        results.append({
            "label": AMENITY_LABELS.get(col, col),
            "delta": delta,
            "pct":   len(con) / len(df) * 100,
            "n_con": len(con),
        })

    results.sort(key=lambda x: x["delta"], reverse=True)
    labels = [r["label"] for r in results]
    deltas = [r["delta"] for r in results]
    pcts   = [r["pct"]   for r in results]
    colors = ["#222" if d >= 0 else "#ccc" for d in deltas]

    fig, ax = plt.subplots(figsize=(10, 6))
    bars = ax.barh(labels, deltas, color=colors, height=0.65)
    ax.axvline(0, color="black", linewidth=0.8)
    ax.set_xlabel("Delta precio mediano (USD/mes, crudo — sin controlar barrio ni m2)")
    ax.set_title("Diferencia de precio mediano: con vs sin cada amenity\n"
                 "(crudo — incluye correlacion con barrio premium)", fontweight="bold")
    # annotate prevalence
    for bar, r in zip(bars, results):
        x = bar.get_width()
        ax.text(max(x, 0) + 5,
                bar.get_y() + bar.get_height() / 2,
                f"{r['pct']:.0f}%  (n={r['n_con']:,})",
                va="center", ha="left", fontsize=7.5, color="#666")
    ax.grid(axis="x", linewidth=0.4, alpha=0.5)
    plt.tight_layout()
    out = OUT_DIR / "06_delta_amenity_crudo.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


# ── 7. Dos mercados: m2/ambiente vs precio, coloreado por tercil de barrio ────

def plot_dos_mercados(df):
    medians = df.groupby("barrio")["price_ref_usd"].median()
    p50 = medians.median()

    df = df.copy()
    df["cat_barrio"] = df["barrio"].map(
        lambda b: "Barrio caro (P50–P100)" if medians.get(b, p50) > p50 else "Barrio barato (P0–P50)"
    )
    df["tiene_premium"] = ((df.get("pileta", 0) == 1) | (df.get("gimnasio", 0) == 1))

    GROUPS_BARRIO = [
        ("Barrio barato (P0–P50)",   df["cat_barrio"] == "Barrio barato (P0–P50)",   "#4472C4"),
        ("Barrio caro (P50–P100)",   df["cat_barrio"] == "Barrio caro (P50–P100)",   "#C00000"),
    ]
    GROUPS_AMENITY = [
        ("Sin pileta ni gimnasio",  ~df["tiene_premium"], "#4472C4"),
        ("Con pileta y/o gimnasio",  df["tiene_premium"], "#C00000"),
    ]

    def add_lowess(ax, x_vals, y_vals, color):
        tmp = pd.DataFrame({"x": x_vals, "y": y_vals}).dropna()
        tmp = tmp[(tmp["x"] >= 12) & (tmp["x"] <= 70)].sort_values("x")
        if len(tmp) < 100:
            return
        smoothed = lowess(tmp["y"], tmp["x"], frac=0.25, it=1, return_sorted=True)
        ax.plot(smoothed[:, 0], smoothed[:, 1], color=color, lw=2.5, zorder=5)

    fmt = mticker.FuncFormatter(lambda x, _: f"${x:,.0f}")
    fig, axes = plt.subplots(1, 2, figsize=(14, 5))

    for label, mask, color in GROUPS_BARRIO:
        sub = df[mask]
        axes[0].scatter(sub["m2_por_ambiente"], sub["price_ref_usd"],
                        alpha=0.12, s=5, color=color, rasterized=True)
    for label, mask, color in GROUPS_BARRIO:
        add_lowess(axes[0], df.loc[mask, "m2_por_ambiente"], df.loc[mask, "price_ref_usd"], color)
        axes[0].scatter([], [], s=40, color=color, label=label)
    axes[0].set_xlabel("m2 por ambiente")
    axes[0].set_ylabel("Precio USD/mes")
    axes[0].set_title("m2/ambiente vs precio — por precio del barrio")
    axes[0].legend(fontsize=8, framealpha=0.8)
    axes[0].yaxis.set_major_formatter(fmt)
    axes[0].set_xlim(0, 120)
    axes[0].set_ylim(0, 4000)

    for label, mask, color in GROUPS_AMENITY:
        sub = df[mask]
        axes[1].scatter(sub["m2_por_ambiente"], sub["price_ref_usd"],
                        alpha=0.12, s=5, color=color, rasterized=True)
    for label, mask, color in GROUPS_AMENITY:
        add_lowess(axes[1], df.loc[mask, "m2_por_ambiente"], df.loc[mask, "price_ref_usd"], color)
        axes[1].scatter([], [], s=40, color=color, label=label)
    axes[1].set_xlabel("m2 por ambiente")
    axes[1].set_ylabel("Precio USD/mes")
    axes[1].set_title("m2/ambiente vs precio — por pileta/gimnasio")
    axes[1].legend(fontsize=8, framealpha=0.8)
    axes[1].yaxis.set_major_formatter(fmt)
    axes[1].set_xlim(0, 120)
    axes[1].set_ylim(0, 4000)

    plt.tight_layout()
    out = OUT_DIR / "07_m2amb_precio_coloreado.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


def main():
    print("Cargando datos...")
    df = load()
    print(f"  {len(df):,} registros | {df['barrio'].nunique()} barrios\n")

    print("Generando visualizaciones:")
    plot_correlation(df)
    plot_amenity_coocurrence(df)
    plot_precio_barrio(df)
    plot_scatter_m2_precio(df)
    plot_heatmap_amb_banos(df)
    plot_amenity_delta(df)
    plot_dos_mercados(df)

    print(f"\nTodos los graficos en: {OUT_DIR}")


if __name__ == "__main__":
    main()
