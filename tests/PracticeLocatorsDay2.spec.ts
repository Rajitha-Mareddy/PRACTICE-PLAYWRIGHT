import { test, expect } from "@playwright/test"


test("Practice Locators", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText("Swag Labs")).toBeVisible();
    // 3 approaches to print list of Items 
    // 1======================
    // const thirdproduct = await page.locator('.inventory_item_name ').innerText();
    // console.log(thirdproduct)
    // 2==================
    // const thirdproduct = await page.locator('.inventory_item_name ');
    // for (let i = 0; i < await thirdproduct.count(); i++) {
    //     const productname = await thirdproduct.nth(i).innerText();
    //     console.log(productname)
    // }


    // 3==================================
    // const thirdproduct = await page.locator('.inventory_item_name ').all();
    // console.log(thirdproduct)
    // for(const products of thirdproduct)
    // {
    // products.innerText();
    // }}


    const thirdproduct = await page.locator('.inventory_item_name ');
    const products = page.locator('.inventory_item')
    for (let i = 0; i < await thirdproduct.count(); i++) {
        const productname = await thirdproduct.nth(i).innerText();

        if (productname === 'Sauce Labs Backpack') {
            await products.nth(i).getByRole('button', { name: 'Add to cart' }).click();
            break
        }
    }
    await page.locator('.shopping_cart_link').click();
    await expect(
        page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' })).toBeVisible();


})