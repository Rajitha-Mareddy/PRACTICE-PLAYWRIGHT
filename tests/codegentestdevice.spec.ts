import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['Pixel 7'],
});

test('test', async ({ page }) => {
  await page.goto('chrome-error://chromewebdata/');
  await expect(page.getByRole('heading')).toContainText('This site can’t be reached');
  await expect(page.getByRole('heading')).toMatchAriaSnapshot(`- text: This site can’t be reached`);
});