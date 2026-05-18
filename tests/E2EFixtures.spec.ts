import { test, expect } from "../Utils/test-fixtures"
import { Config } from '../Utils/Config'
import testdata from '../Utils/TestData/loginData.json'


test.describe('E2E Tests', () => {
    
    test('Valid login', async({loginpage,page})=>
    {
        await loginpage.goTo('client/#/auth/login')
        await loginpage.login(testdata.validLogin.username, testdata.validLogin.password)
        await expect(page).toHaveURL('client/#/dashboard/dash')
        await expect(page).toHaveTitle("Let's Shop")
    })

     test('invalidUsername login', async({loginpage,page})=>
    {
        await loginpage.goTo('client/#/auth/login')
        await loginpage.login(testdata.invalidUsername.username, testdata.invalidUsername.password)
        await expect(loginpage.errorMessage).toBeVisible();
    })

      test('invalidPassword login', async({loginpage,page})=>
    {
        await loginpage.goTo('client/#/auth/login')
        await loginpage.login(testdata.invalidpassword.username, testdata.invalidpassword.password)
        await expect(loginpage.errorMessage).toBeVisible();
    })

       test('invalidBoth login', async({loginpage,page})=>
    {
        await loginpage.goTo('client/#/auth/login')
        await loginpage.login(testdata.invalidBoth.username, testdata.invalidBoth.password)
        await expect(loginpage.errorMessage).toBeVisible();
    })

    test('Add to cart', async ({ loginpage,dashboardpage,cartpage,checkoutpage,page }) => {
        await loginpage.goTo('client/#/auth/login')
        await loginpage.login(Config.username, Config.password)
        await dashboardpage.addProducttoCart(Config.product)
        await cartpage.gotoCart()
        await cartpage.clickBuyBtn(Config.product)
        await checkoutpage.validateProductDetails(Config.product, Config.price, Config.quantity)
        await checkoutpage.selectCountryIncheckoutpage('India')
        await checkoutpage.clickPlaceOrder()
    })




}
)