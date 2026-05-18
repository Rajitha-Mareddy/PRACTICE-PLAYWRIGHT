 import { test, expect } from "@playwright/test"

// test('mutiselectdropdown', async ({ page }) => {
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

// find total cost of rahulshetty courses
//     const headerData = await page.locator("table[name='courses' i] tbody tr th");
//     let Price;
//     let Instructor;
//     let total = 0;
//     for (let i = 0; i < await headerData.count(); i++) {
//         const headernames = await headerData.nth(i).innerText();
//         if (headernames.includes('Price')) {
//             Price = i;
            
//         }
//         if (headernames.includes('Instructor')) {
//             Instructor = i;
            
//         }
//     }

//     const rows = await page.locator("table[name='courses' i] tbody tr")
//     for (let j = 1; j < await rows.count(); j++) {

//         const rowcontent = await rows.nth(j).locator('td').allInnerTexts();

//         const Instructorname = rowcontent[Instructor!]
//         const course = rowcontent[1]
//         const coursePrice = rowcontent[Price!]

//         if (Instructorname.includes('Rahul Shetty')) {
//             total += Number(coursePrice);
//         } 
//     }
//     console.log("Rajul shetty courses total prices" + total)

// })

//read full table

test('read full table', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    const rows = page.locator("table[name='courses'] tbody tr");
    const cols = page.locator("table[name='courses'] tbody tr th");

    const rowCount = await rows.count();
    const colCount = await cols.count();

    for (let i = 1; i < rowCount; i++) {  // skip header row
        for (let j = 0; j < colCount; j++) {

            const cell = await rows.nth(i).locator('td').nth(j).innerText();
            console.log(`Row ${i} Col ${j}: ${cell}`);
        }
    }
})