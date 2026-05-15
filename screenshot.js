const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const file = 'file:///' + path.resolve(__dirname, 'web/index.html').replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  // Full page
  await page.screenshot({ path: 'screenshot_full.png', fullPage: true });

  // Above the fold
  await page.screenshot({ path: 'screenshot_top.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });

  // Sections at specific scroll positions
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  const cuts = [900, 1800, 2700, 3600, 4500, 5400, 6300, 7200, 8100];
  for (const y of cuts) {
    if (y < totalHeight) {
      await page.screenshot({
        path: `screenshot_y${y}.png`,
        clip: { x: 0, y, width: 1440, height: 900 }
      });
    }
  }

  await browser.close();
  console.log(`Screenshots guardados. Altura total: ${totalHeight}px`);
})();
