import { test, expect } from "@playwright/test"
test('Webtable to an array', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const rows = await page.locator("table[name='courses' i] tbody tr")
    const table: any[] = [];
    for (let i = 1; i < await rows.count(); i++) {
        const rowdata = await rows.nth(i).locator('td').allInnerTexts()
        table.push({
            instructor: rowdata[0],
            course: rowdata[1],
            price: rowdata[2]
        }
        )
    }

    console.log(table);
})