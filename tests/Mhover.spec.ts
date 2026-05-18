import { test, expect } from '@playwright/test';

test('mouse actions practice', async ({ page }) => {

    await page.goto('https://demoqa.com/menu');
    const mainitem2 = page.getByText('Main Item 2');
    await mainitem2.hover();
    await page.getByRole('link', { name: 'SUB SUB LIST »' }).hover();
    await page.getByRole('link', { name: 'Sub Sub Item 2' }).click();
});

