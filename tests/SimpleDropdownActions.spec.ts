import{test,expect} from "@playwright/test"

test('simpledropdown', async({page})=>
{
await page.goto('https://the-internet.herokuapp.com/dropdown');
const dropdown2 = await page.locator('#dropdown')
await dropdown2.selectOption({label:'Option 1'});
await expect(dropdown2).toHaveValue('1');

await dropdown2.selectOption({label:'Option 2'});
await expect(dropdown2).toHaveValue('2');




})