import { test, expect } from '@playwright/test'
test('AddToCart', async ({ page }) => {
    await page.goto('https://automationexercise.com/')
    const products = await page.locator('.product-image-wrapper')
    const productnamelinks = await page.locator('.productinfo p')
    for (let i = 0; i < await products.count(); i++) {
        // const productname = await productnamelinks.nth(i).innerText();
        // console.log(productname);

        // if (productname === 'Blue Top') {
        //     //await products.nth(i).hover();
        //     await products.nth(i).locator('a',{hasText:'Add to cart'}).first().click();
        //     break;
        // }
        await products.nth(i).scrollIntoViewIfNeeded();
        await products.nth(i).hover();
        await products.nth(i).locator('a', { hasText: 'Add to cart' }).last().click();
        const alertpopup =   page.locator('#cartModal')
          await alertpopup.waitFor({ state: 'visible' });
        const continueshop = page.getByRole('button', { name: 'Continue Shopping' })
        // await continueshop.waitFor({ state: 'visible' })
        await continueshop.click();
        await alertpopup.waitFor({ state: 'hidden' });
    }






}



)