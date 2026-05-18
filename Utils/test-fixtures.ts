import { test as base, expect } from '@playwright/test'

import { LoginPage } from '../Pages/LoginPage'
import { DashboardPage } from '../Pages/DashboardPage'
import { CartPage } from '../Pages/CartPage'
import { CheckoutPage } from '../Pages/CheckoutPage'

type MyFixtures = {
    loginpage: LoginPage;
    dashboardpage: DashboardPage;
    cartpage: CartPage;
    checkoutpage: CheckoutPage;

}

export const test = base.extend<MyFixtures>({

    loginpage: async ({ page }, use) => {

        const loginpage = new LoginPage(page)
        await use(loginpage)

    },

    dashboardpage:async({page},use)=>
    {
        const dashboardPage = new DashboardPage(page)
        await use(dashboardPage)
    },
    cartpage:async({page},use)=>
    {
        const cartPage = new CartPage(page)
        await use(cartPage)
    },
    checkoutpage:async({page},use)=>
    {
        const checkoutPage = new CheckoutPage(page)
        await use(checkoutPage)
    }



});

export {expect}


