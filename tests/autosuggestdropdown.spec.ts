
import { test, expect } from '@playwright/test'
test('autosuggest dropdown', async ({ page }) => {

    await page.goto('https://www.google.com/')
    await page.locator("[name='q']").fill('selenium');
    const autosuggestions = await page.locator("ul[role='listbox'] li")
    await autosuggestions.first().waitFor();
    const countrange = await autosuggestions.count()
    console.log(countrange)

    // for (let i = 0; i < countrange; i++) {
    //     const text = await autosuggestions.nth(i).textContent();
        
    //     if (text?.toLowerCase().includes('selenium testing')) {
    //         autosuggestions.nth(i).click();
    //         break
    //     }
    // }

    //you can use the for loop or below 1 line of code 
    await autosuggestions.filter({hasText:'selenium'}).first().click();
    await expect(page).toHaveURL(/selenium/);



}

)

