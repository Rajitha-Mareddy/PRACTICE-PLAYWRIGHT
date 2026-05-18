import { test, expect } from '@playwright/test';

test('multiple upload file', async ({ page }) => {

    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')
    await page.locator("input[type='file']").setInputFiles(['tests/Uploads/Test1.png','tests/Uploads/Test2.png']);
    await page.locator("button[type='submit'] span").click()
    await expect(page.locator('span a').nth(1)).toContainText('Test1.png')
    await expect(page.locator('span a').nth(2)).toContainText('Test2.png')


    
 })