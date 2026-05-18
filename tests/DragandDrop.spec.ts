import { test, expect } from '@playwright/test';

test('mouse actions practice', async ({ page }) => {

    await page.goto('https://demoqa.com/droppable');

    const source = page.locator('#draggable')
    const destination = page.locator('#droppable').first();
    await source.dragTo(destination);
    await expect(destination.locator('p')).toHaveText('Dropped!')

}
)