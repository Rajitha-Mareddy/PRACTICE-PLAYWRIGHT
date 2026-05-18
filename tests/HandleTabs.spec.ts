import { test, expect } from "@playwright/test"
test('Handle Tabs', async ({ page, context }) => {

    await page.goto('https://the-internet.herokuapp.com/windows');
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
         page.getByText('Click Here').click()
    ])
    await expect(newPage.locator('h3')).toHaveText('New Window')
    console.log(await page.title());
    console.log(await newPage.title());
}

)