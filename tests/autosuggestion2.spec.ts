import { test, expect, Locator, Page } from '@playwright/test'
// test('autosuggestdropdown2', async ({ page }) => {
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
//     await page.locator('#autocomplete').fill('uni')
//     const dropdownmatches = await page.locator('#ui-id-1 li')
//     await expect(dropdownmatches.first()).toBeVisible();
//     const countofdropdown = await dropdownmatches.count();
//     for (let i = 0; i < countofdropdown; i++) {
//         const text = await dropdownmatches.nth(i).innerText();
//         if (text.includes('United States (USA)')) {
//             await dropdownmatches.nth(i).click();
//             break;
//         }
//         await expect(page.locator('#autocomplete')).toHaveValue('United States (USA)')

        // ======================================
        async function autosuggestdropdownHandling(page:Page,dropdownlocator: string, searchvalue: string, expectedvalue: string, locator: string) {


            await page.locator(dropdownlocator).fill(searchvalue)
            const dropdownmatches = await page.locator(locator)
            await expect(dropdownmatches.first()).toBeVisible();
            const countofdropdown = await dropdownmatches.count();
            for (let i = 0; i < countofdropdown; i++) {
                const text = await dropdownmatches.nth(i).innerText();
                if (text.includes(expectedvalue)) {
                    await dropdownmatches.nth(i).click();
                    break;
                }
              
            }
            await expect(page.locator(dropdownlocator)).toHaveValue(expectedvalue)
        }
        test('autosuggestreusbalefunction', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await autosuggestdropdownHandling(page, '#autocomplete','uni','United States (USA)','#ui-id-1 li')
        // await dropdownmatches.filter({ hasText: 'United States (USA)' }).click()
        //await expect(page.locator('#autocomplete')).toHaveValue('United States (USA)')


    })