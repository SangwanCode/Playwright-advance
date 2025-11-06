import { test,expect } from "@playwright/test";
import path from "path";


test("learn getByText locators",async({page})=>{

    const dirpath=await path.resolve(__dirname,"..");
    const filePath= await path.join(dirpath,"html-page","getByText.html");

    await page.goto("file://"+filePath);
   
    const btnSignup= await page.getByText("Sign ",{exact:true});
    await expect(btnSignup).toHaveCount(1);
    console.log(await btnSignup.innerText());
    
    


});