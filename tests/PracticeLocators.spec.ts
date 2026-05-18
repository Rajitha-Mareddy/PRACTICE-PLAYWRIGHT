import { test, expect } from "@playwright/test"

test("Practice Locators", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText("Swag Labs")).toBeVisible();
    const thirdproduct = page.locator('.inventory_item').nth(2);
    await thirdproduct.getByRole("button", { name: 'Add to cart' }).click();
    await page.locator('.shopping_cart_link').click();
    await expect(
        page.locator('.inventory_item_name', { hasText: 'Sauce Labs Bolt T-Shirt' })
    ).toBeVisible();
})