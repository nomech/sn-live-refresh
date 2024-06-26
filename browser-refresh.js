const chokidar = require("chokidar");
const puppeteer = require("puppeteer");

let browser, page;

async function setupBrowser() {
    browser = await puppeteer.launch({ headless: false});
    page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
    });
    await page.goto('URL TO PORTAL PAGE GOES HERE');
}



async function watchChanges() {
  const watcher = chokidar.watch("PATH TO SN-UTILS ROOT FOLDER GOES HERE", {
    ignored: /(^|[\/\\])\../,
    persistent: true,
  });

  watcher.on("change", async (path) => {
    console.log(`Detected change in file: ${path}`);
    await page.reload(); 
  });
}


setupBrowser().then(watchChanges);
