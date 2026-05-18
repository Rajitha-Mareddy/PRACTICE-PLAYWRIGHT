import {test,expect} from '@playwright/test'
test('datepicker', async({page})=>
{
await page.goto('https://demoqa.com/date-picker')
await page.locator('#datePickerMonthYearInput').click();
await page.locator('.react-datepicker__month-select').selectOption({value:'3'})
await page.locator('.react-datepicker__year-select').selectOption({value:'2026'})
await page.locator(".react-datepicker__day--024").click();
await expect(page.locator('#datePickerMonthYearInput')).toHaveValue('04/24/2026')


}
)