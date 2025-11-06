import { test,expect } from "@playwright/test";
import path from "path";


test("learn getByLabel locators",async({page})=>{

    const dirpath=await path.resolve(__dirname,"..");
    const filePath= await path.join(dirpath,"html-page","getByLabel.html");

    await page.goto("file://"+filePath);
   
   const txtFirstname= await page.getByLabel("Email Address");
   await expect(txtFirstname).toBeVisible();
   await txtFirstname.fill("parvesh@123");

   console.log(await txtFirstname.inputValue());

   const txtByPlaceholder= await page.getByPlaceholder("Enter something");
   await expect(txtByPlaceholder).toBeVisible();
   page.getByAltText("Playwright logo");
    
    


});