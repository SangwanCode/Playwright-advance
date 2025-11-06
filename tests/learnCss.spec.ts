import{test,expect} from '@playwright/test'
import path from 'path'

let filename='';
test.beforeAll("setting data",async()=>{

    const filepath=await path.resolve(__dirname,"..");
    filename= path.join(filepath,"html-page","Css_selectors.html");
    
})

test("basic of css",async({page})=>{
     
    await page.goto(`file://${filename}`);

    const pageTitle= await page.locator("#title");
    await expect(pageTitle).toHaveText(/css selectors/i);

    const msgText= await page.locator("header>.muted");
    await expect(msgText).toHaveText(/Use Playwright CSS /);

    const sectionProfile= page.locator('[data-role="user"] h2');
    await expect(sectionProfile).toHaveText("Profile");
})
test.only("search using the css ",async({page})=>{

    await page.goto(`file://${filename}`);

    const lnkHavHttps= await page.locator("[href^='https']");
    const totalHttpslnk= await lnkHavHttps.count();
    console.log(`Total number of the https links are: ${totalHttpslnk}`)

     const lnkHavPdf= await page.locator("[href$='pdf']");
    const totallnkHavPdf= await lnkHavPdf.count();
    console.log(`Total number of the https links are: ${totallnkHavPdf}`)

    const allHelp= await page.locator("[href*='help']").count();
    console.log(allHelp);

})