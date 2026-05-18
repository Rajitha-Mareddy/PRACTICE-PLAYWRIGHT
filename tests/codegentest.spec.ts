import { test, expect } from '@playwright/test';
import { time, timeStamp } from 'node:console';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const timeStamp = Date.now();
  await page.screenshot({path: 'screenshots/'+'homepage'+timeStamp +'.png'})
  await page.screenshot({path:'screenshots/'+'fullpage'+timeStamp+'.png',fullPage:true})
  const usernamelocator = await page.locator('[data-test="username"]')
  await usernamelocator.screenshot({path:'screenshots/'+'locator'+timeStamp+'.png'})
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="inventory-item-name"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
});