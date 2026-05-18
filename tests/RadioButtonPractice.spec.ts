import { test, expect } from "@playwright/test"

test('RadioButtonPractice', async ({ page }) => {

    page.goto('https://demoqa.com/radio-button');
    const radiobutton = page.getByRole('radio', { name: 'Yes' })
    await radiobutton.click();

    await expect(radiobutton).toBeChecked();

    await expect(page.locator('p')).toBeVisible()


})