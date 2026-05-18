import { Locator, Page, expect } from "@playwright/test";
import { Basepage } from "./BasePage";
export class DashboardPage extends Basepage{
    //page: Page;
    allProducts: Locator;
    //addToCart: Locator;

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.allProducts = page.locator(".card-body");
        //this.addToCart = page.getByRole('button', { name: 'Add To Cart' })
    }
    async addProducttoCart(productname: string) {
        await this.page.locator(".card-body").first().waitFor();
        for (let i = 0; i < await this.allProducts.count(); i++) {
            const product = this.allProducts.nth(i);
            const title = await product.locator("b").textContent();;
            if (await title?.trim() === productname) {
                await product.getByRole('button', { name: 'Add To Cart' }).click();
                break;
            }
        }
    }


}