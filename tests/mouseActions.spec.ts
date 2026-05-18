import { test, expect } from '@playwright/test';

test('mouse actions practice', async ({ page }) => {

    await page.goto('https://demoqa.com/buttons');
    await page.getByRole('button',{name :'Click Me', exact: true}).click();
    await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click');
    const rightbutton =  page.getByRole('button',{name :'Right Click Me', exact: true})
   await  rightbutton.click({button:'right'})
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');

    const doubleclickbtn =  page.getByRole('button',{name :'Double Click Me', exact: true})
    await doubleclickbtn.dblclick();

    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');


    




})