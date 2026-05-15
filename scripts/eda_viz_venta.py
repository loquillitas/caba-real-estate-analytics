"""
eda_viz_venta.py — Visualizaciones exploratorias del dataset de ventas limpio.
Genera PNGs en output/eda_venta/.
"""

import warnings
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import seaborn as sns
from pathlib import Path

warnings.filterwarnings("ignore")
plt.rcParams.update({"font.family": "sans-serif", "font.size": 10})

BASE_DIR  = Path(__file__).parent.parent
DATA_PATH = BASE_DIR / "data" / "processed" / "ventas_limpias.csv"
OUT_DIR   = BASE_DIR / "output" / "eda_venta"
OUT_DIR.mkdir(parents=True, exist_ok=True)

fmt_usd = mticker.FuncFormatter(lambda x, _: f"${x:,.0f}")


def load():
    df = pd.read_csv(DATA_PATH, low_memory=False)
    df["property_type"] = df["property_type"].str.strip().str.title()
    df = df.dropna(subset=["barrio", "ambientes", "m2_total"]).copy()
    df["m2_por_ambiente"] = (df["m2_total"] / df["ambientes"]).round(2)
    return df


# ── 1. Heatmap de correlación ─────────────────────────────────────────────────

def plot_correlation(df):
    cols = [c for c in [
        "m2_total", "m2_cubierto", "ratio_cubierto",
        "ambientes", "dormitorios", "banos",
        "m2_por_ambiente", "price_usd",
    ] if c in df.columns]
    corr = df[cols].corr()

    fig, ax = plt.subplots(figsize=(10, 8))
    mask = np.zeros_like(corr, dtype=bool)
    mask[np.triu_indices_from(mask)] = True
    sns.heatmap(
        corr, mask=mask, annot=True, fmt=".2f", cmap="RdYlGn",
        center=0, vmin=-1, vmax=1, linewidths=0.4,
        annot_kws={"size": 9}, ax=ax,
    )
    ax.set_title("Correlacion entre features y precio de venta (USD)", pad=14, fontsize=12, fontweight="bold")
    plt.tight_layout()
    out = OUT_DIR / "01_correlacion.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")

    corr_precio = corr["price_usd"].drop("price_usd").sort_values(ascending=False)
    print("\n  Top correlaciones con precio USD:")
    for feat, val in corr_precio.head(8).items():
        print(f"    {feat:<30} {val:+.3f}")


# ── 2. Precio por barrio — boxplot ────────────────────────────────────────────

def plot_precio_barrio(df):
    medians = df.groupby("barrio")["price_usd"].median().sort_values(ascending=False)
    ordered = medians.index.tolist()

    fig, ax = plt.subplots(figsize=(16, 7))
    data_ordered = [df[df["barrio"] == b]["price_usd"].values for b in ordered]
    ax.boxplot(
        data_ordered, vert=True, patch_artist=True, showfliers=False,
        medianprops=dict(color="black", linewidth=1.5),
        boxprops=dict(facecolor="#e8e8e8", linewidth=0.7),
        whiskerprops=dict(linewidth=0.7), capprops=dict(linewidth=0.7),
    )
    ax.set_xticks(range(1, len(ordered) + 1))
    ax.set_xticklabels(ordered, rotation=55, ha="right", fontsize=7)
    ax.yaxis.set_major_formatter(fmt_usd)
    ax.set_ylabel("Precio de venta (USD)")
    ax.set_title("Distribucion de precios de venta por barrio (sin outliers extremos)", fontweight="bold")
    ax.grid(axis="y", linewidth=0.4, alpha=0.5)
    plt.tight_layout()
    out = OUT_DIR / "02_precio_por_barrio.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


# ── 3. Scatter m2 vs precio, coloreado por tipo de propiedad ─────────────────

def plot_scatter_m2_precio(df):
    tipos = df["property_type"].dropna().unique()
    colors = {"Departamento": "#333", "Ph": "#888", "Casa": "#bbb"}

    fig, axes = plt.subplots(1, 2, figsize=(14, 5))

    for tipo in tipos:
        sub = df[df["property_type"] == tipo]
        axes[0].scatter(sub["m2_total"], sub["price_usd"],
                        alpha=0.1, s=5, color=colors.get(tipo, "#666"), label=tipo)
    axes[0].set_xlabel("Superficie total (m2)")
    axes[0].set_ylabel("Precio USD")
    axes[0].set_title("m2 total vs precio por tipo de propiedad")
    axes[0].legend(markerscale=3, fontsize=8)
    axes[0].yaxis.set_major_formatter(fmt_usd)
    axes[0].set_xlim(0, 400)
    axes[0].set_ylim(0, 1_200_000)

    axes[1].scatter(df["m2_por_ambiente"], df["price_usd"],
                    alpha=0.08, s=5, color="#333")
    axes[1].set_xlabel("m2 por ambiente")
    axes[1].set_ylabel("Precio USD")
    axes[1].set_title("m2/ambiente vs precio")
    axes[1].yaxis.set_major_formatter(fmt_usd)
    axes[1].set_xlim(0, 150)
    axes[1].set_ylim(0, 1_200_000)

    plt.tight_layout()
    out = OUT_DIR / "03_scatter_m2_precio.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


# ── 4. Heatmap precio mediano por ambientes × baños ───────────────────────────

def plot_heatmap_amb_banos(df):
    pivot = (
        df[df["ambientes"].between(1, 5) & df["banos"].between(1, 4)]
        .groupby(["ambientes", "banos"])["price_usd"]
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
    sns.heatmap(pivot / 1000, annot=True, fmt=".0f", cmap="YlOrRd",
                linewidths=0.5, ax=axes[0], annot_kws={"size": 9})
    axes[0].set_title("Precio mediano (USD miles) por ambientes x banos", fontweight="bold")
    axes[0].set_ylabel("Ambientes")
    axes[0].set_xlabel("Banos")

    sns.heatmap(counts, annot=True, fmt=".0f", cmap="Blues",
                linewidths=0.5, ax=axes[1], annot_kws={"size": 9})
    axes[1].set_title("N propiedades por ambientes x banos", fontweight="bold")
    axes[1].set_ylabel("Ambientes")
    axes[1].set_xlabel("Banos")

    plt.tight_layout()
    out = OUT_DIR / "04_heatmap_amb_banos.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


# ── 5. Dos mercados: m2/ambiente vs precio coloreado por barrio ───────────────

def plot_dos_mercados(df):
    terciles = df["price_usd"].groupby(df["barrio"]).median()
    p33, p66 = terciles.quantile(0.33), terciles.quantile(0.66)

    def categoria(barrio):
        med = terciles.get(barrio, terciles.median())
        if med <= p33:   return "Barrio barato (P0-P33)"
        if med <= p66:   return "Barrio medio (P33-P66)"
        return "Barrio caro (P66-P100)"

    df = df.copy()
    df["cat_barrio"] = df["barrio"].map(categoria)

    colors = {
        "Barrio barato (P0-P33)":  "#222",
        "Barrio medio (P33-P66)":  "#999",
        "Barrio caro (P66-P100)":  "#ddd",
    }

    fig, axes = plt.subplots(1, 2, figsize=(14, 5))

    for cat, color in colors.items():
        sub = df[df["cat_barrio"] == cat]
        axes[0].scatter(sub["m2_por_ambiente"], sub["price_usd"],
                        alpha=0.15, s=5, color=color, label=cat)
    axes[0].set_xlabel("m2 por ambiente")
    axes[0].set_ylabel("Precio USD")
    axes[0].set_title("m2/ambiente vs precio (coloreado por barrio)")
    axes[0].legend(markerscale=3, fontsize=8)
    axes[0].yaxis.set_major_formatter(fmt_usd)
    axes[0].set_xlim(0, 150)
    axes[0].set_ylim(0, 1_200_000)

    tipo_colors = {"Departamento": "#222", "Ph": "#888", "Casa": "#bbb"}
    for tipo, color in tipo_colors.items():
        sub = df[df["property_type"] == tipo]
        axes[1].scatter(sub["m2_por_ambiente"], sub["price_usd"],
                        alpha=0.12, s=5, color=color, label=tipo)
    axes[1].set_xlabel("m2 por ambiente")
    axes[1].set_ylabel("Precio USD")
    axes[1].set_title("m2/ambiente vs precio (coloreado por tipo)")
    axes[1].legend(markerscale=3, fontsize=8)
    axes[1].yaxis.set_major_formatter(fmt_usd)
    axes[1].set_xlim(0, 150)
    axes[1].set_ylim(0, 1_200_000)

    plt.tight_layout()
    out = OUT_DIR / "05_dos_mercados.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


# ── 6. Delta de precio por tipo de propiedad y precio/m² por barrio ──────────

def plot_precio_m2_barrio(df):
    stats = (
        df.groupby("barrio")["precio_por_m2"]
        .agg(mediana="median", n="count")
        .query("n >= 20")
        .sort_values("mediana", ascending=True)
    )

    fig, ax = plt.subplots(figsize=(10, 10))
    ax.barh(stats.index, stats["mediana"], color="#333", height=0.7)
    ax.xaxis.set_major_formatter(fmt_usd)
    ax.set_xlabel("Precio mediano por m2 (USD)")
    ax.set_title("Precio mediano por m2 por barrio (ventas 2020)", fontweight="bold")
    ax.grid(axis="x", linewidth=0.4, alpha=0.5)
    plt.tight_layout()
    out = OUT_DIR / "06_precio_m2_barrio.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    plt.close()
    print(f"  Guardado: {out.name}")


def main():
    print("Cargando datos...")
    df = load()
    print(f"  {len(df):,} registros | {df['barrio'].nunique()} barrios\n")

    print("Generando visualizaciones:")
    plot_correlation(df)
    plot_precio_barrio(df)
    plot_scatter_m2_precio(df)
    plot_heatmap_amb_banos(df)
    plot_dos_mercados(df)
    plot_precio_m2_barrio(df)

    print(f"\nTodos los graficos en: {OUT_DIR}")


if __name__ == "__main__":
    main()
