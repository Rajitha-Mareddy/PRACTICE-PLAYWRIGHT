import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import testdata from '../Utils/TestData/loginData.json'
import { readCSV } from '../Utils/readCSV'
//import { Basepage } from '../Pages/BasePage'

const testcases: any[] = readCSV('C:/Users/ADMIN/Documents/Practice Playwright/Utils/TestData/logintestdatacsv.csv')
test.describe('CSV Login tests', () => {

    let loginPage: LoginPage


    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);

    })

    for (const tc of testcases) {
        test(`login test - ${tc.type}`, async ({ page }) => {
            await loginPage.goTo('client/#/auth/login')
            await loginPage.login(tc.username, tc.password)
            if (tc.type === 'Valid') {
                await expect(page).toHaveTitle("Let's Shop")
            }
            else {
                await expect(loginPage.errorMessage).toBeVisible();
            }
        })
    }

})