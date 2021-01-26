const puppeteer = require("puppeteer");
const portFinder = require("portfinder");

const app = require("../app");

describe("basic integration test", () => {
    let server = null;
    let port = null;
    let browser = null;
    let page = null;

    beforeEach(async () => {
        port = await portFinder.getPortPromise();
        server = app.listen(port);
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterEach(async () => {
        browser.close();
        server.close();
    });

    test("checking ", async () => {
        await page.goto(`http://localhost:${port}`);
        await Promise.all([
            page.waitForNavigation(),
            page.click('[data-about-id="about"'),
        ]);
        expect(page.url()).toBe(`http://localhost:${port}/about`);
    });
});

