import { test, expect } from "@playwright/test"
test('handlewindow', async ({ page }) => {

    await page.goto('https://demoqa.com/browser-windows')
    const [newwindow] = await Promise.all(

        [page.waitForEvent('popup'),
        page.getByRole('button', { name: 'New Window' })
        ]
    )
    await expect(newwindow.locator('h1')).toHaveText('This is a sample page')
})