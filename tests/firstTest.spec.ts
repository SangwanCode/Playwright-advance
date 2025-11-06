import{test, expect, chromium, firefox, webkit} from "@playwright/test"

test("validate app Url",{tag:["@smoke","@regression"]},async({})=>{

    const browser= await chromium.launch();
    // const context1=await browser.newContext();
    const context= await browser.newContext();
    const page =await context.newPage();
    // const page1= await context1.newPage();    
   await page.goto('https://playwright.dev/');   
//    await page1.goto("https://www.google.com/");
   await expect(page).toHaveURL(/playwright/i);

});

test(' Sit 9297: first has title login ',{tag: "@regression"}, async ({page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


test(' first test login get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});