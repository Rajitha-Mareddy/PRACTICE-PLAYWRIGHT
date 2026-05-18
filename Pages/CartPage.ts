import { Locator, Page, expect } from "@playwright/test";
import { Basepage } from "./BasePage";
export class CartPage extends Basepage{

    //page: Page;
    cartBtn: Locator;
    heading: Locator;
    //productInCart: Locator;
    buyNowBtn: Locator

    constructor(page: Page) {
        super(page)
        this.page = page;
      this.cartBtn = page.locator("button[routerlink*='cart']");
        this.heading = page.locator("h1:has-text('My Cart')")
        //this.productInCart = page.locator("div h3:has-text('ZARA COAT 3')")
        
        this.buyNowBtn = page.getByText('Buy Now');
    }

    async gotoCart() {
        await this.cartBtn.waitFor();
        await this.cartBtn.click();
    }
    async clickBuyBtn(productname:string)
    {
        await expect(this.heading).toBeVisible()
        const product = this.page.locator(`div h3:has-text('${productname}')`)
        await expect(product ).toBeVisible()
        await this.buyNowBtn.click();
    }


}