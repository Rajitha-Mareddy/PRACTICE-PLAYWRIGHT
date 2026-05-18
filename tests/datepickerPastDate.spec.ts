import { test, expect } from '@playwright/test'
test('datepicker', async ({ page }) => {

    await page.goto('https://demoqa.com/date-picker')
    const targetyear = '2023'
    const targetmonth = 'October'
    const targetDate = '10'
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']

    await page.locator('#datePickerMonthYearInput').click();
    while (true) {
        const Monthyear = await page.locator('.react-datepicker__current-month').textContent();
        const presentyear = Monthyear?.split(' ')[1]
        const presentMonth = Monthyear?.split(' ')[0]

        if (presentyear === targetyear && presentMonth === targetmonth) {
            break;
        }

        if (parseInt(targetyear) < parseInt(presentyear)) {

            await page.locator('.react-datepicker__navigation--previous').click();
        }
        else if (parseInt(targetyear) > parseInt(presentyear)) 
          {
                await page.locator('.react-datepicker__navigation--next').click();
            }
            else
            {
                if(months.indexOf(presentMonth) > months.indexOf(targetmonth)) {
            await page.locator('.react-datepicker__navigation--previous').click();
        } else {
            await page.locator('.react-datepicker__navigation--next').click();
        }
    }
}

    
    await page.locator(
  `.react-datepicker__day--0${targetDate}:not(.react-datepicker__day--outside-month)`
).click();

})