import {test,expect} from "@playwright/test"
import fs from 'fs';
test('download file', async({page})=>
{

await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
await page.locator('#inputText').fill('welcome')
await page.locator('#generateTxt').click();
const [download] = await Promise.all(
    [
        page.waitForEvent('download'),
        page.locator('#txtDownloadLink').click()
    ]
)
const filepath = 'tests/Downloads/Test1.txt';
await download.saveAs(filepath);
const fileexist =fs.existsSync(filepath)
expect(fileexist).toBeTruthy()

if(fileexist)
{
    fs.unlinkSync(filepath)
}
})