import { test, expect } from "@playwright/test"

test('mutiselectdropdown', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const headers = await page.locator("table[id='product'] tbody tr th")

    // const colcount = await headers.count();
    // for (let i = 0; i < colcount; i++) {
    //     const colnames = await headers.nth(i).innerText();
    //     console.log(colnames)
    // }

    // const rows = await page.locator("table[name='courses'] tbody tr").all();
    // const finalrows = rows.slice(1)

    // for (let rowdata of finalrows) {
    //     const coldata = await rowdata.locator('td').allInnerTexts()
    //     //console.log(coldata)
    //     const Instructorname = coldata[0]
    //     const coursename = coldata[1]
    //     const price = coldata[2]
    //     if (coursename.includes('Python')) {
    //         console.log(coursename + ' ' + price)
    //     }
    // }

    const headerData = await page.locator("table[name='courses' i] tbody tr th");
    let Price;
    for (let i = 0; i < await headerData.count(); i++) {
        const headernames = await headerData.nth(i).innerText();
        if (headernames.includes('Price')) {

         Price = i;
            break;

        }
    }

    const rowsdata = await page.locator("table[name='courses' i] tbody tr");

    for (let j = 1; j < await rowsdata.count(); j++) {
        //const rowcontent = await rowsdata.nth(i).innerText();
        const rowcontent = await rowsdata.nth(j).locator('td').allInnerTexts();
        const course = rowcontent[1]
        const price = rowcontent[Price!]
        //console.log(rowcontent)
        if (course.includes('Python')) {

            console.log(course + ' ' + price)
            break;
        }
        // console.log(rowcontent + ' ' + i)
    }










})
