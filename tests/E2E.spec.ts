import { test, expect } from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage";
import { CartPage } from '../Pages/CartPage'
import { DashboardPage } from '../Pages/DashboardPage'
import { CheckoutPage } from '../Pages/CheckoutPage'
import { Config } from '../Utils/Config'
import testdata from '../Utils/TestData/loginData.json'
// test('E2E Test', async({page})=>

// {

// const loginPage = new LoginPage(page);
// const CartPage = new cartPage(page)
// const dashboardpage = new DashboardPage(page);
// const checkoutPage = new CheckoutPage(page)

// await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
// await loginPage.login('rajimareddy442@gmail.com','Mahi@123')
// await dashboardpage.addProducttoCart('ZARA COAT 3')
// await CartPage.gotoCart()
// await CartPage.clickBuyBtn('ZARA COAT 3')
// await checkoutPage.validateProductDetails(' ZARA COAT 3 ',' $ 11500 ',' Quantity: 1 ')
// await checkoutPage.selectCountryIncheckoutpage('India')
// await checkoutPage.clickPlaceOrder()


// })

test.describe('E2E Tests', () => {
    let loginPage: LoginPage;
    let cartPage: CartPage;
    let dashboardPage: DashboardPage;
    let checkoutPage: CheckoutPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        cartPage = new CartPage(page);
        dashboardPage = new DashboardPage(page);
        checkoutPage = new CheckoutPage(page);
        //await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
        // await loginPage.goTo('client/#/auth/login')
        // await loginPage.login(Config.username, Config.password)

    })

    test('@smoke @regression Valid login', async({page})=>
    {
        await loginPage.goTo('client/#/auth/login')
        await loginPage.login(testdata.validLogin.username, testdata.validLogin.password)
        await expect(page).toHaveURL('client/#/dashboard/dash')
        await expect(page).toHaveTitle("Let's Shop")
    })

     test('@smoke @regression invalidUsername login', async({page})=>
    {
        await loginPage.goTo('client/#/auth/login')
        await loginPage.login(testdata.invalidUsername.username, testdata.invalidUsername.password)
        await expect(loginPage.errorMessage).toBeVisible();
    })

      test('@smoke @regression invalidPassword login', async({page})=>
    {
        await loginPage.goTo('client/#/auth/login')
        await loginPage.login(testdata.invalidpassword.username, testdata.invalidpassword.password)
        await expect(loginPage.errorMessage).toBeVisible();
    })

       test('@smoke @regression invalidBoth login', async({page})=>
    {
        await loginPage.goTo('client/#/auth/login')
        await loginPage.login(testdata.invalidBoth.username, testdata.invalidBoth.password)
        await expect(loginPage.errorMessage).toBeVisible();
    })

    test('@smoke @sanity Add to cart', async ({ page }) => {
        await loginPage.goTo('client/#/auth/login')
        await loginPage.login(Config.username, Config.password)
        await dashboardPage.addProducttoCart(Config.product)
        await cartPage.gotoCart()
        await cartPage.clickBuyBtn(Config.product)
        await checkoutPage.validateProductDetails(Config.product, Config.price, Config.quantity)
        await checkoutPage.selectCountryIncheckoutpage('India')
        await checkoutPage.clickPlaceOrder()
    })




}
)
