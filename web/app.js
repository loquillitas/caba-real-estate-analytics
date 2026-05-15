// ─── Estado ───────────────────────────────────────────────────────────────────
let mode = 'alquiler';
let data = null;

// ─── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => setMode('alquiler'));

function setMode(newMode) {
  mode = newMode;
  data = mode === 'alquiler'
    ? (typeof ALQUILER_DATA !== 'undefined' ? ALQUILER_DATA : null)
    : (typeof VENTA_DATA   !== 'undefined' ? VENTA_DATA   : null);

  document.getElementById('btn-alquiler').dataset.active = mode === 'alquiler';
  document.getElementById('btn-venta').dataset.active    = mode === 'venta';

  if (!data) { showNoData(); return; }
  render();
}

function showNoData() {
  document.getElementById('main-content').innerHTML = `
    <div class="px-6 md:px-20 py-24">
      <p class="text-xs uppercase tracking-widest text-gray-400 mb-6">Sin datos</p>
      <p class="text-gray-400">Ejecutá primero los scripts de Python:</p>
      <pre class="mt-4 bg-gray-50 p-6 text-sm text-gray-500">python scripts/clean_data.py
python scripts/model.py
python scripts/clean_data_venta.py
python scripts/model_venta.py</pre>
    </div>`;
}

// ─── Helpers ───────────────────────────────────────────────────────────────────
function fmtUSD(n, decimals = 0) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency', currency: 'USD', maximumFractionDigits: decimals
  }).format(n);
}
function fmtNum(n) { return n.toLocaleString('es-AR'); }
function fmtPct(n) { return (n * 100).toFixed(1) + '%'; }

function interpolate(grid, values, x) {
  if (x <= grid[0])                  return values[0];
  if (x >= grid[grid.length - 1])    return values[values.length - 1];
  for (let i = 0; i < grid.length - 1; i++) {
    if (x >= grid[i] && x <= grid[i + 1]) {
      const t = (x - grid[i]) / (grid[i + 1] - grid[i]);
      return values[i] + t * (values[i + 1] - values[i]);
    }
  }
  return values[0];
}

function barHTML(label, value, maxValue, formatFn, extraClass = '') {
  const pct = Math.abs(value) / maxValue * 100;
  const neg = value < 0;
  return `
    <div class="bar-row">
      <span class="bar-label" title="${label}">${label}</span>
      <div class="bar-track">
        <div class="bar-fill ${neg ? 'neg' : ''} ${extraClass}" style="width:${pct.toFixed(1)}%"></div>
      </div>
      <span class="bar-val">${formatFn(value)}</span>
    </div>`;
}

// ─── Render principal ──────────────────────────────────────────────────────────
function render() {
  renderKPIs();
  renderDistribucion();
  renderRankingBarrios();
  renderComparador();
  renderImpacto();
  renderImportancias();
  renderPredictor();
  updateTextos();
}

function updateTextos() {
  const isAlquiler = mode === 'alquiler';
  document.getElementById('header-desc').textContent = isAlquiler
    ? `Análisis de ${fmtNum(data.kpis.n_propiedades)} avisos de alquiler de CABA scrapeados de ZonaProp en marzo 2026.`
    : `Análisis de ${fmtNum(data.kpis.n_propiedades)} propiedades en venta de CABA del dataset Properati 2020.`;
  document.getElementById('modelo-tag').textContent = isAlquiler
    ? `ZonaProp · Alquileres · Marzo 2026`
    : `Properati · Compraventa · 2020`;
}

// ─── 01 KPIs ──────────────────────────────────────────────────────────────────
function renderKPIs() {
  const k = data.kpis;
  const m = data.modelo;
  const isAlquiler = mode === 'alquiler';
  const priceSuffix = isAlquiler ? '/mes' : '';

  document.getElementById('kpi-mediana').textContent    = fmtUSD(k.precio_mediano) + priceSuffix;
  document.getElementById('kpi-m2').innerHTML           = fmtUSD(k.precio_m2_mediano, 1) +
    `<span class="text-sm font-normal text-gray-400 block mt-1">${isAlquiler ? 'por m² · mes' : 'por m²'}</span>`;
  document.getElementById('kpi-n').textContent          = fmtNum(k.n_propiedades);
  document.getElementById('kpi-rango').textContent      = fmtUSD(k.p25) + ' – ' + fmtUSD(k.p75);
  document.getElementById('kpi-r2').textContent         = m.r2;
  document.getElementById('kpi-r2-pct').textContent     = (m.r2 * 100).toFixed(1);
  document.getElementById('kpi-mae').textContent        = fmtUSD(m.mae) + priceSuffix;
  document.getElementById('kpi-mae-pct').textContent    = m.mae_pct;
  document.getElementById('kpi-p10').textContent        = fmtUSD(k.p10) + priceSuffix;
  document.getElementById('kpi-p90').textContent        = fmtUSD(k.p90) + priceSuffix;
}

// ─── 02 Distribución ──────────────────────────────────────────────────────────
function renderDistribucion() {
  const d = data.distribucion;
  const isAlquiler = mode === 'alquiler';
  const container = document.getElementById('dist-chart');

  // Merge bins: alquiler bins son $100 → merge x2 para rangos de $200
  //             venta bins son $25K → merge x4 para rangos de $100K
  const mergeFactor = isAlquiler ? 2 : 4;
  const mergedEdges = [];
  const mergedCounts = [];
  for (let i = 0; i < d.counts.length; i += mergeFactor) {
    mergedEdges.push(d.bins_edge[i]);
    let count = 0;
    for (let j = i; j < Math.min(i + mergeFactor, d.counts.length); j++) count += d.counts[j];
    mergedCounts.push(count);
  }
  mergedEdges.push(d.bins_edge[d.counts.length]);

  // Recortar cola derecha al 97%
  const total = mergedCounts.reduce((a, b) => a + b, 0);
  let acum = 0, cutIdx = mergedCounts.length;
  for (let i = 0; i < mergedCounts.length; i++) {
    acum += mergedCounts[i];
    if (acum / total >= 0.97) { cutIdx = i + 1; break; }
  }

  const maxCount = Math.max(...mergedCounts.slice(0, cutIdx));
  let html = '';
  for (let i = 0; i < cutIdx; i++) {
    if (mergedCounts[i] === 0) continue;
    const mid = (mergedEdges[i] + mergedEdges[i + 1]) / 2;
    const label = isAlquiler
      ? 'USD ' + Math.round(mid)
      : 'USD ' + Math.round(mid / 1000) + 'K';
    html += barHTML(label, mergedCounts[i], maxCount, n => fmtNum(n) + ' prop.', 'accent');
  }
  container.innerHTML = html;
}

// ─── 03 Ranking de barrios ─────────────────────────────────────────────────────
function renderRankingBarrios() {
  const isAlquiler = mode === 'alquiler';
  const priceSuffix = isAlquiler ? '/mes' : '';
  const barrios = data.barrios;

  document.getElementById('ranking-titulo').textContent = isAlquiler
    ? '¿Cuánto sale alquilar en cada barrio?'
    : '¿Cuánto cuesta comprar en cada barrio?';

  const top5 = barrios.slice(0, 5);
  const tbody = document.getElementById('ranking-tbody');
  tbody.innerHTML = top5.map((b, i) => `
    <tr class="border-b border-gray-50 hover:bg-gray-50 transition-colors">
      <td class="py-4 pr-6 text-xs text-gray-300 tabular-nums w-8">${String(i + 1).padStart(2, '0')}</td>
      <td class="py-4 pr-8 font-semibold">${b.barrio}</td>
      <td class="py-4 pr-8 font-black tabular-nums">${fmtUSD(b.precio_mediano)}${priceSuffix}</td>
      <td class="py-4 pr-8 text-sm text-gray-400 tabular-nums hidden md:table-cell">${fmtUSD(b.p25)}${priceSuffix} – ${fmtUSD(b.p75)}${priceSuffix}</td>
      <td class="py-4 pr-8 text-sm text-gray-400 tabular-nums hidden md:table-cell">${fmtUSD(b.precio_m2_mediano, isAlquiler ? 1 : 0)}/m²</td>
      <td class="py-4 text-xs text-gray-300 tabular-nums hidden md:table-cell">${fmtNum(b.n)}</td>
    </tr>`).join('');

  // Buscador de barrios
  const searchContainer = document.getElementById('ranking-search-container');
  searchContainer.innerHTML = `
    <p class="text-xs uppercase tracking-widest text-gray-400 mb-3">Buscá tu barrio</p>
    <div class="relative max-w-xs">
      <span class="absolute left-0 bottom-2 text-gray-400 text-base leading-none">&#128269;</span>
      <input type="text" id="barrio-search" placeholder="Escribí un barrio…"
        autocomplete="off"
        class="w-full pl-7 border-b border-gray-300 pb-2 text-base focus:outline-none focus:border-black bg-transparent" />
      <div id="barrio-suggestions"
        class="absolute top-full left-0 w-full bg-white border border-gray-100 shadow-sm z-10 hidden"></div>
    </div>
    <div id="barrio-search-result" class="mt-8"></div>
  `;

  const input = document.getElementById('barrio-search');
  const suggestionsDiv = document.getElementById('barrio-suggestions');

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) { suggestionsDiv.classList.add('hidden'); return; }
    const matches = barrios.filter(b => b.barrio.toLowerCase().includes(q)).slice(0, 6);
    if (!matches.length) { suggestionsDiv.classList.add('hidden'); return; }
    suggestionsDiv.innerHTML = matches.map(b =>
      `<div class="px-4 py-2.5 cursor-pointer hover:bg-gray-50 text-sm font-semibold"
        onmousedown="selectBarrio('${b.barrio.replace(/'/g, "\\'")}')">${b.barrio}</div>`
    ).join('');
    suggestionsDiv.classList.remove('hidden');
  });

  input.addEventListener('blur', () => {
    setTimeout(() => suggestionsDiv.classList.add('hidden'), 150);
  });
}

function selectBarrio(name) {
  const isAlquiler = mode === 'alquiler';
  const priceSuffix = isAlquiler ? '/mes' : '';
  const b = data.barrios.find(x => x.barrio === name);
  if (!b) return;
  const rank = data.barrios.findIndex(x => x.barrio === name) + 1;
  const input = document.getElementById('barrio-search');
  const suggestionsDiv = document.getElementById('barrio-suggestions');
  if (input) input.value = name;
  if (suggestionsDiv) suggestionsDiv.classList.add('hidden');
  const result = document.getElementById('barrio-search-result');
  if (!result) return;
  result.innerHTML = `
    <div class="border-t border-gray-100 pt-6">
      <p class="text-xs text-gray-300 tabular-nums mb-1">#${String(rank).padStart(2, '0')} de ${data.barrios.length} barrios</p>
      <p class="text-2xl font-black mb-6">${b.barrio}</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
        <div class="bg-white p-5">
          <p class="text-xs uppercase tracking-widest text-gray-400 mb-2">Mediana</p>
          <p class="text-xl font-black">${fmtUSD(b.precio_mediano)}${priceSuffix}</p>
        </div>
        <div class="bg-white p-5">
          <p class="text-xs uppercase tracking-widest text-gray-400 mb-2">Rango P25–P75</p>
          <p class="text-lg font-black">${fmtUSD(b.p25)} – ${fmtUSD(b.p75)}</p>
        </div>
        <div class="bg-white p-5">
          <p class="text-xs uppercase tracking-widest text-gray-400 mb-2">Por m²</p>
          <p class="text-xl font-black">${fmtUSD(b.precio_m2_mediano, isAlquiler ? 1 : 0)}/m²</p>
        </div>
        <div class="bg-white p-5">
          <p class="text-xs uppercase tracking-widest text-gray-400 mb-2">Propiedades</p>
          <p class="text-xl font-black">${fmtNum(b.n)}</p>
        </div>
      </div>
    </div>`;
}

// ─── 04 Comparador de barrios ──────────────────────────────────────────────────
function renderComparador() {
  const barrios = data.barrios.map(b => b.barrio);
  const priceSuffix = mode === 'alquiler' ? '/mes' : '';

  const selA = document.getElementById('comp-a');
  const selB = document.getElementById('comp-b');

  const prevA = selA.value || barrios[0];
  const prevB = selB.value || barrios[4];

  const opts = barrios.map(b => `<option value="${b}">${b}</option>`).join('');
  selA.innerHTML = opts;
  selB.innerHTML = opts;
  selA.value = barrios.includes(prevA) ? prevA : barrios[0];
  selB.value = barrios.includes(prevB) ? prevB : barrios[4];

  updateComparador();
}

function updateComparador() {
  const isAlquiler = mode === 'alquiler';
  const priceSuffix = isAlquiler ? '/mes' : '';
  const barrios = data.barrios;

  const nameA = document.getElementById('comp-a').value;
  const nameB = document.getElementById('comp-b').value;
  const bA    = barrios.find(b => b.barrio === nameA) || barrios[0];
  const bB    = barrios.find(b => b.barrio === nameB) || barrios[4];

  function row(label, valA, valB) {
    const higher = valA > valB ? 'a' : valA < valB ? 'b' : 'eq';
    return `
      <tr class="border-b border-gray-50">
        <td class="py-3 text-xs uppercase tracking-widest text-gray-400 pr-8">${label}</td>
        <td class="py-3 font-bold tabular-nums ${higher === 'a' ? 'text-black' : 'text-gray-400'}">${valA}</td>
        <td class="py-3 font-bold tabular-nums ${higher === 'b' ? 'text-black' : 'text-gray-400'}">${valB}</td>
      </tr>`;
  }

  document.getElementById('comp-tabla').innerHTML = `
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b-2 border-black">
          <th class="py-3 text-left text-xs uppercase tracking-widest text-gray-400 pr-8 w-48"></th>
          <th class="py-3 text-left font-black text-base">${nameA}</th>
          <th class="py-3 text-left font-black text-base">${nameB}</th>
        </tr>
      </thead>
      <tbody>
        ${row('Precio mediano', fmtUSD(bA.precio_mediano) + priceSuffix, fmtUSD(bB.precio_mediano) + priceSuffix)}
        ${row('Rango P25–P75', fmtUSD(bA.p25) + ' – ' + fmtUSD(bA.p75), fmtUSD(bB.p25) + ' – ' + fmtUSD(bB.p75))}
        ${row('Precio / m²', fmtUSD(bA.precio_m2_mediano, isAlquiler ? 1 : 0), fmtUSD(bB.precio_m2_mediano, isAlquiler ? 1 : 0))}
        ${row('Propiedades', fmtNum(bA.n), fmtNum(bB.n))}
      </tbody>
    </table>`;
}

// ─── 05 Impacto amenities / features ──────────────────────────────────────────
const VENTA_FEATURE_ORDER = ['es_casa', 'amb_2_vs_1', 'amb_3_vs_2', 'es_ph', 'banos_2vs1'];

function renderImpacto() {
  const isAlquiler = mode === 'alquiler';
  let items = isAlquiler ? data.impacto_amenities : data.impacto_features;

  // Para venta: mostrar en orden específico
  if (!isAlquiler) {
    items = VENTA_FEATURE_ORDER.map(key => items.find(i => i.key === key)).filter(Boolean);
  }
  const priceSuffix = isAlquiler ? '/mes' : '';

  document.getElementById('impacto-titulo').textContent = isAlquiler
    ? '¿Cuánto suman los extras?'
    : '¿Cuánto suma cada característica?';
  document.getElementById('impacto-desc').textContent = isAlquiler
    ? 'Efecto marginal de cada amenity sobre el precio: diferencia promedio predicha con y sin el feature, controlando barrio y superficie.'
    : 'Diferencia de precio predicha por el modelo manteniendo constantes superficie, barrio y tipo. Cochera y balcón no están disponibles en el dataset Properati 2020.';

  const container = document.getElementById('impacto-chart');
  if (!items || items.length === 0) { container.innerHTML = ''; return; }

  const maxAbs = Math.max(...items.map(d => Math.abs(d.delta_usd)));
  container.innerHTML = items.map(item => {
    const pct = Math.abs(item.delta_usd) / maxAbs * 100;
    const neg = item.delta_usd < 0;
    const sign = item.delta_usd >= 0 ? '+' : '';
    const sub = item.pct_con != null
      ? `<span class="text-gray-300">${fmtPct(item.pct_con / 100)} del mercado</span>`
      : '';
    return `
      <div class="bar-row">
        <div class="bar-label-block">
          <span class="bar-label" title="${item.label}">${item.label}</span>
          <span class="bar-sub">${sub}</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill ${neg ? 'neg' : ''}" style="width:${pct.toFixed(1)}%"></div>
        </div>
        <span class="bar-val">${sign}${fmtUSD(item.delta_usd)}${priceSuffix}</span>
      </div>`;
  }).join('');
}

// ─── 06 Feature importances ────────────────────────────────────────────────────
const IMPORTANCES_EXCLUDE = new Set([
  'amenity_score_edificio', 'amenity_score_depto',
  'm2_por_ambiente', 'es_monoambiente', 'ambientes',
]);

function renderImportancias() {
  const isAlquiler = mode === 'alquiler';
  const topN = isAlquiler ? 4 : 5;
  const items = data.feature_importances
    .filter(item => !IMPORTANCES_EXCLUDE.has(item.feature))
    .slice(0, topN);

  const gridCols = isAlquiler ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-5';
  const container = document.getElementById('importancias-chart');
  container.innerHTML = `
    <div class="grid ${gridCols} gap-px bg-gray-100 border border-gray-100">
      ${items.map(item => `
        <div class="bg-white p-6 md:p-8">
          <p class="text-xs uppercase tracking-widest text-gray-400 mb-4 leading-snug">${item.label}</p>
          <p class="text-2xl md:text-3xl font-black">${(item.importance * 100).toFixed(1)}%</p>
        </div>
      `).join('')}
    </div>`;
}

// ─── 07 Predictor ─────────────────────────────────────────────────────────────
function renderPredictor() {
  const isAlquiler = mode === 'alquiler';
  const pred = data.predictor;

  document.getElementById('pred-titulo').textContent = isAlquiler
    ? '¿Cuánto saldría tu alquiler?'
    : '¿Cuánto cuesta una propiedad similar?';

  // select barrio
  const selBarrio = document.getElementById('pred-barrio');
  const prevBarrio = selBarrio.value;
  selBarrio.innerHTML = pred.barrios.map(b => `<option value="${b}">${b}</option>`).join('');
  if (pred.barrios.includes(prevBarrio)) selBarrio.value = prevBarrio;

  // tipo de propiedad (solo venta)
  const tipoBlock = document.getElementById('pred-tipo-block');
  if (!isAlquiler && pred.property_types) {
    tipoBlock.classList.remove('hidden');
    document.getElementById('pred-tipo').innerHTML = pred.property_types.map(t =>
      `<option value="${t}">${t === 'Ph' ? 'PH' : t}</option>`
    ).join('');
  } else {
    tipoBlock.classList.add('hidden');
  }

  // amenities (solo alquiler)
  const amenBlock = document.getElementById('pred-amenities-block');
  if (isAlquiler && pred.amenity_deltas) {
    amenBlock.classList.remove('hidden');
    const topAmenities = Object.entries(pred.amenity_deltas)
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    document.getElementById('pred-amenities').innerHTML = topAmenities.map(([key, delta]) => `
      <label class="flex items-center gap-3 cursor-pointer group">
        <input type="checkbox" id="pred-am-${key}" class="w-4 h-4 rounded accent-black cursor-pointer" />
        <span class="text-sm text-gray-600 group-hover:text-black transition-colors">
          ${AMENITY_LABELS[key] || key}
          <span class="text-xs text-gray-300 ml-1">+${fmtUSD(delta)}</span>
        </span>
      </label>`).join('');
  } else {
    amenBlock.classList.add('hidden');
  }

  document.getElementById('pred-result').innerHTML = '';
}

const AMENITY_LABELS = {
  pileta: 'Pileta', gimnasio: 'Gimnasio', sum: 'SUM', parrilla: 'Parrilla',
  seguridad_24hs: 'Seguridad 24hs', ascensor: 'Ascensor', solarium: 'Solarium',
  laundry: 'Laundry', cowork: 'Cowork', balcon: 'Balcón', terraza: 'Terraza',
  patio: 'Patio', jardin: 'Jardín', baulera: 'Baulera',
  aire_acondicionado: 'Aire acondicionado', calefaccion: 'Calefacción',
  amoblado: 'Amoblado', apto_profesional: 'Apto profesional',
  acepta_mascotas: 'Acepta mascotas', apto_credito: 'Apto crédito',
};

function estimate() {
  const pred    = data.predictor;
  const barrio  = document.getElementById('pred-barrio').value;
  const m2      = parseFloat(document.getElementById('pred-m2').value) || 50;
  const amb     = document.getElementById('pred-amb').value;
  const isAlquiler = mode === 'alquiler';

  let basePrice;
  if (isAlquiler) {
    const prices = pred.precios?.[barrio]?.[amb];
    if (!prices) return;
    basePrice = interpolate(pred.m2_grid, prices, m2);

    if (pred.amenity_deltas) {
      Object.keys(pred.amenity_deltas).forEach(key => {
        const cb = document.getElementById('pred-am-' + key);
        if (cb && cb.checked) basePrice += pred.amenity_deltas[key];
      });
    }
  } else {
    const tipo   = document.getElementById('pred-tipo')?.value || pred.property_types?.[0];
    const prices = pred.precios?.[barrio]?.[tipo]?.[amb];
    if (!prices) return;
    basePrice = interpolate(pred.m2_grid, prices, m2);
  }

  if (basePrice <= 0) return;

  const mae        = data.modelo.mae;
  const priceSuffix = isAlquiler ? '/mes' : '';

  document.getElementById('pred-result').innerHTML = `
    <div class="mt-10 pt-10 border-t border-gray-100">
      <p class="text-xs uppercase tracking-widest text-gray-400 mb-4">Precio estimado</p>
      <p class="text-6xl md:text-8xl font-black leading-none tracking-tight">
        ${fmtUSD(basePrice)}<span class="text-2xl font-normal text-gray-300">${priceSuffix}</span>
      </p>
      <p class="text-sm text-gray-400 mt-4">
        Rango probable&ensp;${fmtUSD(basePrice - mae)} – ${fmtUSD(basePrice + mae)}
        <span class="text-gray-200 ml-2">· margen ±${fmtUSD(mae)}</span>
      </p>
    </div>`;
}
