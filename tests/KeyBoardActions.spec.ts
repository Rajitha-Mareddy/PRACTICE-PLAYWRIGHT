import { test, expect } from '@playwright/test';

test('mouse actions practice', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');
    const fullname = await page.getByPlaceholder('Full Name');
    fullname.focus();
    await page.pause();
    await page.keyboard.insertText('userName');
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab');
    const email = await page.getByPlaceholder("name@example.com");
    await email.fill('ra@gmail.com')
    await email.press('Tab');
    const address = await page.getByPlaceholder("Current Address");
    await address.focus();
    await page.keyboard.insertText('Hyd')
    await page.keyboard.press('Tab');
    const address2 = await page.locator('#permanentAddress')
    await address2.focus();
    await page.keyboard.press('Control+V')
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    

})