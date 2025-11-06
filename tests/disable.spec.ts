import{test,expect} from '@playwright/test'
import path from 'path';


test("learning the disable property",async({page})=>{

  //console.log(__dirname);
     const folderPath= path.resolve(__dirname,"..");
     console.log(`path of the project folder is : ${folderPath}`);
     const filePath= path.join(folderPath,"html-page","getByRole.html");
     console.log(`file path is : ${filePath}`);

     await page.goto(`file://${filePath}`);


     const hdlevel= await page.getByRole("heading",{name:"overview",pressed:true});
        await expect(hdlevel).toBeVisible();


        //   const btnExpand= await page.getByRole('button',{name:"menu",expanded:false});
        // await expect(btnExpand).toBeVisible();
        // await btnExpand.click();
        //  const btnsubMenu= await page.getByRole("link",{name: "Profile",exact:true});
        // const btnsubMenu= await page.locator("#menuPanel")
        // await expect(btnsubMenu).toBeHidden();
        //    const btnHide=await page.getByRole("button",{name:"secret action" ,includeHidden:true}) ;
        //    console.log(await btnHide.count());

        // const btnExpand= await page.getByRole('button',{name:"menu",expanded:false});
        // await expect(btnExpand).toBeVisible();
        // await btnExpand.click();
        // //  const btnExpandTrue= await page.getByRole('button',{name:"menu",expanded:true});
        // // await expect(btnExpandTrue).toBeVisible();
        // await expect(btnExpand).not.toBeVisible();


        // const btnSave= await page.getByRole("button",{name:"Save",exact:true})
        //     console.log(await btnSave.count());


    //  const btnPaynow = await page.getByRole("button",{name:"pay now",disabled:true});
    //     await expect(btnPaynow).toBeVisible();
    // //  console.log(await btnPaynow.count());
    //  await expect(btnPaynow).toBeDisabled();
    // //  const btnAction = await page.getByRole("button",{name:"Action inside",disabled:true});
    // //     console.log(await btnAction.count());
})