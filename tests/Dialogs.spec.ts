import { test, expect } from '@playwright/test'
test('Dialogues', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    // page.on('dialog', async dialog => {
    //     console.log(dialog.type())
    //     console.log(dialog.message())
    //     expect(dialog.type()).toContain('alert')
    //     expect(dialog.message()).toContain('I am an alert box!');
    //     dialog.accept();
    // })

    // await page.locator('#alertBtn').click();
    // ========================================================================

    //     page.on('dialog', async dialog=>
    //     {
    //     expect(dialog.type()).toContain('confirm')
    //     expect(dialog.message()).toContain('Press a button!')
    //     dialog.dismiss();
    //     }
    //     )
    //     await page.locator('#confirmBtn').click();
    //     const expectedtext = await page.locator('#demo')
    //     await expect(expectedtext).toHaveText('You pressed Cancel!')

    // }

    //============================================================

    page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        dialog.accept('Raji')


    })
    await page.locator('#promptBtn').click();
    await expect(page.locator('#demo')).toHaveText('Hello Raji! How are you today?')


})
