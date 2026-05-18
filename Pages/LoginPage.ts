import { Locator,expect,Page } from "@playwright/test";
import { Basepage } from "./BasePage";
export class LoginPage extends Basepage{
   //page:Page;
    email:Locator;
    password:Locator;
    loginBtn:Locator;
    errorMessage:Locator;
    constructor(page:Page)
    {
        super(page)
        this.page=page;
       
        this.email=page.locator('#userEmail');
        this.password= page.locator('#userPassword')
        this.loginBtn=page.locator('#login')
        this.errorMessage = page.locator('#toast-container')
    }
    async login(email:string,password:string)
    {
        await this.email.fill(email)
        await this.password.fill(password)
       await this.loginBtn.click();
    }

   



}