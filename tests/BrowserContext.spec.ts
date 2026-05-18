import { expect, test, chromium } from '@playwright/test'

test('browsertest', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto("https://example.com");
    await page2.goto("https://demo.automationtesting.in/Frames.html")
})