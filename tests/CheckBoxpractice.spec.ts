import{test,expect} from '@playwright/test'
test('CheckboxExercise',async({page})=>
{

    page.goto('https://the-internet.herokuapp.com/checkboxes')
    //const checkbox1 = page.getByRole('checkbox',{name:' checkbox 1'})
    const checkbox1=page.locator("input[type='checkbox']").nth(0);
   await checkbox1.check()
    await expect(checkbox1).toBeChecked();
    

}
    
)