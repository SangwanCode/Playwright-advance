import { test, expect } from '@playwright/test';
import { count } from 'console';

test('has title login',{tag:"@smoke"}, async ({page }) => {
 
 
    await page.goto('https://www.saucedemo.com/');
    const txtUsername= await page.getByRole("textbox",{name:"username"});
    const attributeValue= await txtUsername.getAttribute("placeholder");
    console.log(`attributeValue is : ${attributeValue}`);
    await expect(txtUsername).toHaveAttribute("placeholder","Username");
        let countUsername= await txtUsername.count();
        console.log(`the count of the username is ${countUsername}`);
        console.log("the count of the username is "+countUsername);
        if(countUsername>0){
            console.log("we found the username");

        }else{
            console.log("not found");
        }

     await expect(txtUsername).toBeVisible();

    const txtPassword=await page.getByRole("textbox",{name:"password"});
    await expect(txtPassword).toBeVisible();
    const btnLogin= await page.getByRole("button");
    await expect(btnLogin).toBeVisible();    
    await expect(btnLogin).toHaveValue("Login");
    const hdAcceptedUsername= await page.getByRole("heading",{name:"accepted usernames "});
    let textOfUsernames= await hdAcceptedUsername.textContent();
    console.log(`in ui the text for usernames ${textOfUsernames}`);
    await expect(hdAcceptedUsername).toHaveText("Accepted usernames are:");


  
});