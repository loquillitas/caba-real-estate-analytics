const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const file = 'file:///' + path.resolve(__dirname, 'web/index.html').replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  // Switch to Compraventa mode
  await page.click('#btn-venta');
  await new Promise(r => setTimeout(r, 500));

  // Full page in venta mode
  await page.screenshot({ path: 'screenshot_venta_full.png', fullPage: true });

  // Key sections
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const cuts = [0, 900, 1800, 2700, 3600, 4500, 5400, 6300, 7200];
  for (const y of cuts) {
    if (y < totalHeight) {
      await page.screenshot({
        path: `screenshot_venta_y${y}.png`,
        clip: { x: 0, y, width: 1440, height: 900 }
      });
    }
  }

  // Test predictor: select Palermo, 3 ambientes, 80m2, click estimate
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 300));

  const predBarrio = await page.$('#pred-barrio');
  await predBarrio.select('Palermo');
  await page.$eval('#pred-amb', el => { el.value = '3'; });
  await page.$eval('#pred-m2', el => { el.value = '80'; });

  // Select a property type
  const predTipo = await page.$('#pred-tipo');
  if (predTipo) await predTipo.select('Departamento');

  await page.click('button[onclick="estimate()"]');
  await new Promise(r => setTimeout(r, 500));

  const predSection = await page.evaluate(() => {
    const el = document.getElementById('pred-result');
    const rect = el.getBoundingClientRect();
    return { top: window.scrollY + rect.top - 200 };
  });

  await page.screenshot({
    path: 'screenshot_venta_predictor_result.png',
    clip: { x: 0, y: Math.max(0, predSection.top), width: 1440, height: 900 }
  });

  await browser.close();
  console.log(`Venta screenshots guardados. Altura total: ${totalHeight}px`);
})();
