import { test, expect } from '@playwright/test'

test('POM SampleTest', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator('#name').fill('Rajitha')
    const radio2 =  page.locator("input[value='radio2']")
    await radio2.check();
    await expect(radio2).toBeChecked();
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Rajitha')
        await dialog.accept();
        console.log(await dialog.type())
    }
    )


    await page.locator("#alertbtn").click()



})