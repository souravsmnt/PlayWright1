import { test, expect } from '@playwright/test';
//import path from 'path';
import testData from './testdata.json';


// Basic search of locator

test('test', async ({ page }) => {

  await page.goto("https://www.saucedemo.com/");

  //await page.locator('#user-name').fill('standard_user');
    await page.pause();
 await page.getByPlaceholder('Username').isVisible();
  await page.getByPlaceholder('Username').fill(testData.firstname);
  
  await page.pause();

  await page.locator('#password').fill('secret_sauce');

  //await page.locator('#login-button').click();

  await page.getByRole('button', { name: 'Login' }).click();

  //await page.getByRole('button', { name: 'Open Menu' }).click();

  //await page.locator('.product_sort_container').click();

  //await page.locator('.product_sort_container').selectOption({ label: 'Price (high to low)' });



});



/* Basic drag and drop file check

test('dragdrop', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com//");

  

  const sourcefile = page.locator('#draggable');

  const targetfile =  page.locator('#droppable');

  sourcefile.dragTo(targetfile);

  

  await page.pause();

});

*/



/*Upload Single file

test('uploadSinglefile', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com//");

  await page.setInputFiles('#singleFileInput', "C:\\Users\\ADMIN\\Downloads\\testupload.txt");

  await page.getByRole('button', { name: 'Upload Single File' }).click();

  await page.pause();

  // Expect a success message to appear

    await expect(page.locator('#singleFileStatus')).toContainText('Single file selected');

  //await expect(page.locator('#uploadedFileName')).toHaveText('testupload.txt');

  //await expect(page.locator('.success')).toBeVisible();

});

*/



/*Upload Multiple file

test('uploadMultiplefile', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com//");

  await page.setInputFiles('#multipleFilesInput', ["C:\\Users\\ADMIN\\Downloads\\testupload.txt", "C:\\Users\\ADMIN\\Downloads\\testupload1.txt"]);

 

 // Resolve file paths

 // const filePath1 = path.resolve('C:/Users/ADMIN/Downloads/testupload.txt');

 // const filePath2 = path.resolve('C:/Users/ADMIN/Downloads/testupload1.txt');

//await page.pause();

  // Upload multiple files at once

 // await page.setInputFiles('#multipleFilesInput', [filePath1, filePath2]);

 // await page.pause();

    

  await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

  await page.pause();

  // Expect a success message to appear

    await expect(page.locator('#multipleFilesStatus')).toContainText('Multiple files selected');

  //await expect(page.locator('#uploadedFileName')).toHaveText('testupload.txt');

  //await expect(page.locator('.success')).toBeVisible();

});

//Upload Multiple file 







test('downloadfile', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com//");

  

  // Step 2: Click on the "Download Files" link

  await page.getByRole('link', { name: 'Download Files' }).click();

await page.pause();

  // Step 3: Enter sample text

  await page.fill('#inputText', 'This is my first text to download');

await page.pause();

  // Step 4: Click on "Generate and Download Text File" button

  await page.getByRole('button', { name:'Generate and Download Text File' }).click();

await page.pause();

  // Step 5: Wait for the download event when clicking "Download Text File" link

  const [ download ] = await Promise.all([

    page.waitForEvent('download'),

    page.getByRole('link', { name: 'Download Text File' }).click()

  ]);

await page.pause();

  // Step 6: Save the file locally

  const filePath = path.resolve('C:/Users/ADMIN/Downloads/myFirstText.txt');

  await download.saveAs(filePath);

  

});





test('radioOption', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.click('#male');

  await expect(page.locator('#male')).toBeChecked();

  await page.pause();

  await page.click('#female');

  await expect(page.locator('#female')).toBeChecked();

  await page.pause();



});

*/



/*

test('chekboxtest', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.pause();

  await page.getByLabel('Sunday').check();

  await page.pause();

  await page.getByLabel('Tuesday').check();

  await page.pause();



});



*/

/*

test('handle simple alert', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

await page.pause();

  await page.getByRole('button', { name: 'Simple Alert' }).click();

  await page.pause();

  // Step 1: Listen for the alert dialog

  page.once('dialog', async dialog => {

    // Step 2: Assert the alert text

    expect(dialog.message()).toBe('I am an alert box!');

    await page.pause();

    // Step 3: Accept the alert

    await dialog.accept();

    await page.pause();

  });

 

});



*/
/*
test('handle confirmation alert', async ({ page }) => 
{

  await page.goto("https://testautomationpractice.blogspot.com/");

await page.pause();

  await page.getByRole('button', { name:'Confirmation Alert' }).click();

 await page.pause();

  page.once('dialog', async dialog => { 
  expect(dialog.message()).toBe('Press  a button!');

  await page.pause();

  await dialog.accept();

  await page.pause();

  await expect(page.locator('#demo')).toHaveText('You  pressed OK!');

await page.pause();

     });


});



test('handle confirmation alert2', async ({  page }) => 
{

 await page.goto("https://testautomationpractice.blogspot.com/");

       // 👉 If you want to click Cancel instead:

    await page.getByRole('button',  { name: 'Confirmation Alert' }).click();

  await page.pause();

  page.once('dialog', async dialog => {

   await page.pause();

    expect(dialog.message()).toBe('Press  a button!');

    await page.pause();

    await dialog.dismiss();

    await page.pause();

    await expect(page.locator('#demo')).toHaveText('You  pressed Cancel!');

await page.pause();

});



});

/*

test('iframetesting', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  //await page.pause();



});

*/

