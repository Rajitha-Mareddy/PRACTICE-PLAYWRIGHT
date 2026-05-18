import { Locator, Page, Expect, expect } from "@playwright/test"
import { Basepage } from "./BasePage";


export class CheckoutPage extends Basepage{
    //page: Page;
    detailproductDetails: Locator;
    dropdown: Locator
    dropdownvalues: Locator
    placeorderBtn: Locator

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.detailproductDetails = page.locator(".item__details div")
        this.dropdown = page.getByPlaceholder('Select Country')
        this.dropdownvalues = page.locator(".ta-results button")
        this.placeorderBtn = page.getByText('Place Order');
      
       
        

    }

    async validateProductDetails(productName: string, productPrice: string, ProductQuantity: string) {
        const totalvalues = await this.detailproductDetails.count()
        for (let i = 0; i < totalvalues; i++) {
            const allproductDeatils = await this.detailproductDetails.nth(i).allInnerTexts();
            if ((await allproductDeatils.includes(productName)) && (await allproductDeatils.includes(productPrice)) && (await allproductDeatils.includes(ProductQuantity))) {

                await expect(allproductDeatils).toContain(productName)
                await expect(allproductDeatils).toContain(productPrice)
                await expect(allproductDeatils).toContain(ProductQuantity)
                break;
            }

        }
    }
    async selectCountryIncheckoutpage(country: string) {
        await this.dropdown.pressSequentially(country)
       await this.dropdownvalues.first().waitFor();

        const count = await this.dropdownvalues.count()
        for (let i = 0; i < count; i++) {
            const countryname = (await this.dropdownvalues.nth(i).textContent())?.trim();
            if (countryname===country){

                await this.dropdownvalues.nth(i).click();
                break;
            }
        }
    }
    async clickPlaceOrder() {

        await this.placeorderBtn.click();
        await expect(this.page.getByRole('heading', { name: 'Thankyou for the order.' })).toBeVisible();
    }



}


//     h1: has - text("My Cart")
// div h3: has - text("ZARA COAT 3")