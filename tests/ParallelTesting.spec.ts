import { test, expect } from '@playwright/test';
import { time, timeStamp } from 'node:console';

test('parallel test 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
})
test('parallel test 2', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
})

test('parallel test 3', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
})

test('parallel test 4', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
})