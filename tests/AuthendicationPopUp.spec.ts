import { test, expect } from "@playwright/test"

//appraoch 1 
//test('authendication pop up test', async ({ page }) => {
//await page.goto('https://user:passwd@httpbin.org/basic-auth/user/passwd')
//})

//Approach 2
test('authendicationssignment', async({browser})=>
{
    const context = await browser.newContext({
        httpCredentials:{
            username:'user',
            password:'passwd'
        }
    }

    )
    const page = await context.newPage();
    await page.goto('https://httpbin.org/basic-auth/user/passwd')
    console.log(await page.title())


})


