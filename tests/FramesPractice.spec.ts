import { expect, test } from "@playwright/test"
test('practice frames', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/nested_frames')
    const text = await page.frameLocator("[src='/frame_top']").frameLocator("[src='/frame_left']").locator('body').innerText();
    console.log(text)
    await expect(text).toBe('LEFT')


}
)