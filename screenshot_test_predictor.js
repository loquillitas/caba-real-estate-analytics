const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const file = 'file:///' + path.resolve(__dirname, 'web/index.html').replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  // Test alquiler predictor
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 300));

  // Select Palermo, 2 ambientes, 55m²
  const predBarrio = await page.$('#pred-barrio');
  await predBarrio.select('Palermo');
  await page.$eval('#pred-amb', el => { el.value = '2'; });
  await page.$eval('#pred-m2', el => { el.value = '55'; });

  // Check amoblado and pileta checkboxes
  await page.evaluate(() => {
    const amoblado = document.getElementById('pred-am-amoblado');
    if (amoblado) amoblado.checked = true;
    const pileta = document.getElementById('pred-am-pileta');
    if (pileta) pileta.checked = true;
  });

  await page.click('button[onclick="estimate()"]');
  await new Promise(r => setTimeout(r, 500));

  const bottom = await page.evaluate(() => document.body.scrollHeight - 900);
  await page.screenshot({
    path: 'screenshot_alq_predictor_result.png',
    clip: { x: 0, y: Math.max(0, bottom - 200), width: 1440, height: 900 }
  });

  // Also take a wider view showing the full predictor section
  const predTop = await page.evaluate(() => {
    const el = document.querySelector('[id="07"]') || document.querySelector('section:last-of-type');
    return window.scrollY;
  });

  const sectionY = await page.evaluate(() => {
    const sections = document.querySelectorAll('main section');
    const lastSection = sections[sections.length - 1];
    const rect = lastSection.getBoundingClientRect();
    return rect.top + window.pageYOffset;
  });

  await page.screenshot({
    path: 'screenshot_alq_predictor_full.png',
    clip: { x: 0, y: sectionY, width: 1440, height: 900 }
  });

  await browser.close();
  console.log('Predictor test screenshots guardados');
})();
