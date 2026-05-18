import{test,expect} from "@playwright/test"
test.describe("group1", async()=>
{

    test.describe.configure({mode:'parallel'})
test.fixme('test 1', async()=>
{
    console.log("pass test 1")

})

test.skip('test 2', async()=>
{
    console.log("pass test 2")
})

test.fail('test 3 ', async()=>
{
    console.log("pass test 3 ")
})
test('test 4 ',{tag:['@sanity', '@regression'] },async()=>
{
    console.log("pass test 4 ")
})
test('test 5 ', {tag:'@master'}, async()=>
{
    console.log("pass test 5 ")
})


})

test.beforeEach('beforeeach ', async()=>
{
    console.log(' before each Hiiiiiiiii')
})

test.afterEach('after each ', async()=>
{
    console.log('after each byeeeeeeeeeee')
})