import {PracticePage} from '../Pages/Practicepage'
import{expect, test} from '@playwright/test'

test('practicetest', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const Practice = new PracticePage(page);
    await Practice.entername('Rajitha')
    await Practice.selectradio('radio2');
    await expect(Practice.radioButton).toBeChecked();
    await Practice.handlealert('Rajitha');
     await Practice.clickAlert();
     await Practice.selectdroDownValue('option2')

     await Practice.selectchkbox('option2')
})