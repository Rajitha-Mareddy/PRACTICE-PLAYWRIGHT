import { Page, Locator, expect } from '@playwright/test'
export class PracticePage {
    page: Page;
    nameInput: Locator;
    radioButton: Locator;
    alertBtn: Locator;
    dropDown:Locator
    //checkbox:Locator

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('#name')
        this.radioButton = page.locator("input[value='radio2']")
        this.alertBtn = page.locator("#alertbtn")
        this.dropDown= page.locator('#dropdown-class-example');
        //this.checkbox=page.locator("input[value='option1']")
    }

    async entername(name: string) {
        await this.nameInput.fill(name)
    }

    async selectradio(value:string) {
       await this.page.locator(`input[value='${value}']`).check();
    }
    async handlealert(expectedmessage: string) {
        this.page.on('dialog', async dialog => {
            expect(dialog.message()).toContain(expectedmessage)
            dialog.accept();
        }
        )
    }
    async clickAlert() {
        await this.alertBtn.click()
    }
    async selectdroDownValue(ValueAttribute:string)
    {
        await this.dropDown.selectOption({value:ValueAttribute})
    }
    async selectchkbox(value:string)
    {
        //await this.page.locator(`input[value= ${value}]`).check();
         await this.page.locator(`input[value=${value}]`).check();
    }

}