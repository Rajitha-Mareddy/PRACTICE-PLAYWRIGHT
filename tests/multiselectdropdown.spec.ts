import { test, expect } from "@playwright/test"

test('mutiselectdropdown', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu')
    const dropdown = await page.locator('#react-select-4-input')

    const values = ['Green', 'Red', 'Black']

    for (let value of values) {
        await dropdown.click();
        const alloptions = await page.locator('.css-qr46ko div').all();
        for (let dropdownvalue of alloptions) {
            const text = await dropdownvalue.innerText();
            if (text === value) {
                await dropdownvalue.click();
                break;
            }
        }
    }

    //const multiSelect = page.locator('#react-select-4-input').locator('..');

    //await expect(multiSelect.getByText('Green')).toBeVisible();
})