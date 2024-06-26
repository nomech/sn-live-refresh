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
    await page.goto('https://dev269213.service-now.com/csm?id=tcp_dynamic_list_demo');
}



async function watchChanges() {
  const watcher = chokidar.watch("E:\\proj\\todo\\sn-utils\\dev269213", {
    ignored: /(^|[\/\\])\../,
    persistent: true,
  });

  watcher.on("change", async (path) => {
    console.log(`Detected change in file: ${path}`);
    await page.reload(); 
  });
}


setupBrowser().then(watchChanges);
