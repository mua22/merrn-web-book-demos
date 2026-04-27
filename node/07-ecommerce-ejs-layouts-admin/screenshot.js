const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to a typical desktop size
  await page.setViewport({ width: 1280, height: 800 });

  try {
    // 1. Seed the database first to ensure there's data
    await page.goto('http://localhost:3000/admin', { waitUntil: 'networkidle2' });
    
    // Evaluate taking action to click seed if it exists, or just do a POST to /admin/seed
    await page.evaluate(async () => {
        await fetch('/admin/seed', { method: 'POST' });
    });
    
    // Wait a bit for db
    await new Promise(r => setTimeout(r, 1000));

    // 2. Screenshot Admin Dashboard
    await page.goto('http://localhost:3000/admin', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'screenshot-admin.png' });
    console.log('Admin screenshot saved: screenshot-admin.png');

    // 3. Screenshot Frontend Products
    await page.goto('http://localhost:3000/products', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'screenshot-frontend.png' });
    console.log('Frontend screenshot saved: screenshot-frontend.png');

  } catch (err) {
    console.error('Error taking screenshots:', err);
  } finally {
    await browser.close();
  }
})();
