import {test} from '@playwright/test'

test.describe("tests for transfer func",async()=>{
test("first program", async()=>{

   await console.log('out put for : first program');
});

test("second program", async({page,browserName})=>{
    test.skip(browserName=='chromium'," working on the chromium browsers")

   await console.log('out put for : second program');
});


})

test("third program", async()=>{
    test.slow();

   await console.log('out put for : third program');
});