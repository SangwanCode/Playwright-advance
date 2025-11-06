import { test, expect } from '@playwright/test';
import path from 'path';

test("learning getByRole options",async({page})=>{

    //console.log(__dirname);
     const folderPath= path.resolve(__dirname,"..");
     console.log(`path of the project folder is : ${folderPath}`);
     const filePath= path.join(folderPath,"html-page","getByRole.html");
     console.log(`file path is : ${filePath}`);

     await page.goto(`file://${filePath}`);

    const chkSub= page.getByRole("checkbox",{name: "subscribe",checked:false});
    const chksubCust= page.getByRole("checkbox",{name:"custom checkbox",checked:false});
   
    // await expect(chkSub).not.toBeChecked();
      await expect(chkSub).toBeVisible();
       await expect(chksubCust).toBeVisible();
    // await expect(chkSub).toHaveCount(1);

    //  await page.pause();
    // await page.goto("http://192.168.29.11:8080/getByRole.html");
    // await page.pause();


    
})