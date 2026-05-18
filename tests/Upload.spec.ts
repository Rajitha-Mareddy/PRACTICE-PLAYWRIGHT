import { test, expect } from '@playwright/test';

test('upload file', async ({ page }) => {

    await page.goto('https://demoqa.com/upload-download')

    await page.locator('#uploadFile').setInputFiles('tests/Uploads/Test1.txt');
    //const text = await page.locator('#uploadedFilePath').innerText();
    //     await expect(text).toBe('C:\\fakepath\\Test1.txt')
    //or 
    const text = await page.locator('#uploadedFilePath')
//     await expect(text)
//         .toContainText('Test1.txt');
//or 
let path ='C:\\fakepath\\Test1.txt'
await expect(text).toHaveText(path);
 })