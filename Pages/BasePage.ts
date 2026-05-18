import { Page } from "@playwright/test";
export class Basepage {
    page: Page
    constructor(page: Page) {
        this.page = page;

    }

    async goTo(url: string) {
        await this.page.goto(url)
    }
}