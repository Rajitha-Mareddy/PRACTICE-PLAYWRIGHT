import { expect, Expect, test } from "playwright/test";
test('framestest', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html')
    //     const text = page.frameLocator("[name='SingleFrame']").locator("input[type='text']")
    //     await text.fill('Hello Frames');
    //     const checkinput = await text.inputValue()
    //    await  expect(checkinput).toBe('Hello Frames')
    // await expect(text).toHaveText('Hello Frames')
    //page.waitForTimeout(3000);

    //============================================================
    //Another assignment tab 2 ====================
    await page.getByRole('link', {name:'Iframe with in an Iframe'}).click()
    const text1 = page.frameLocator("[src='MultipleFrames.html']").frameLocator("[src='SingleFrame.html']").locator("input[type='text']")
    await text1.fill('Hello Frames');
    const checkinput = await text1.inputValue()
    await expect(checkinput).toBe('Hello Frames')
    await page.pause();




}
)
