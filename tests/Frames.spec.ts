import { test, expect, Frame } from '@playwright/test'
test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')
    const listframe = page.frames();
    console.log(listframe.length)
    const frame = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
    //==============Appraoch 1===============================
    // if (frame) {
    //     await frame.locator("[name='mytext1']").fill("hello")
    // }
    // else {
    //     console.log("No frame")
    // }

    // ==============Appraoch 2===============================
    //const a = await page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill('John');

    //======================Hanling InnerFrames======================
    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
    if (frame3) {
        const Childframeslist = frame3.childFrames();
        const radio = Childframeslist[0].getByLabel('I am a human')
        await radio.check();
        await expect(radio).toBeChecked();
    }
    else {
        console.log('No matching details found')
    }




})