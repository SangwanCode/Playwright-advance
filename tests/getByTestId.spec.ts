import { test,expect, selectors } from "@playwright/test";
import path from "path";
import { Selectors } from "@playwright/test";

test("learn getByLabel locators",async({page})=>{

    const dirpath=await path.resolve(__dirname,"..");
    const filePath= await path.join(dirpath,"html-page","getByTestid.html");

    await page.goto("file://"+filePath);  
    
    const btnSave=await page.getByTestId("save-top");
    await expect(btnSave).toHaveCount(1);
    
    await selectors.setTestIdAttribute("data-pw");  
    const btnSave1=await page.getByTestId("save-top1");
    await expect(btnSave1).toHaveCount(1);


});