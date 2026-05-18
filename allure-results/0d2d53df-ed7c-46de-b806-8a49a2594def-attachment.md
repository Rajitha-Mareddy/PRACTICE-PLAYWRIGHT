# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2EFixtures.spec.ts >> E2E Tests >> invalidUsername login
- Location: tests\E2EFixtures.spec.ts:16:10

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#userEmail')

```

# Test source

```ts
  1  | import { Locator,expect,Page } from "@playwright/test";
  2  | import { Basepage } from "./BasePage";
  3  | export class LoginPage extends Basepage{
  4  |    //page:Page;
  5  |     email:Locator;
  6  |     password:Locator;
  7  |     loginBtn:Locator;
  8  |     errorMessage:Locator;
  9  |     constructor(page:Page)
  10 |     {
  11 |         super(page)
  12 |         this.page=page;
  13 |        
  14 |         this.email=page.locator('#userEmail');
  15 |         this.password= page.locator('#userPassword')
  16 |         this.loginBtn=page.locator('#login')
  17 |         this.errorMessage = page.locator('#toast-container')
  18 |     }
  19 |     async login(email:string,password:string)
  20 |     {
> 21 |         await this.email.fill(email)
     |                          ^ Error: locator.fill: Test ended.
  22 |         await this.password.fill(password)
  23 |        await this.loginBtn.click();
  24 |     }
  25 | 
  26 |    
  27 | 
  28 | 
  29 | 
  30 | }
```