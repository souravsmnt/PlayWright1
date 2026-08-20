
import { test, expect } from '@playwright/test';


import testData from './testdata.json';
//console.log(testData);
/*
test('Sample Test', async ({ page }) => {
console.log("This testing is done because of Bhulakshmi. I don't want but she pushed me :).");
console.log(testData.username);
console.log(testData.firstname);
console.log(testData.middlename);
console.log(testData.lastname);
console.log(testData.password.length);
//await page.goto("https://www.myhcl.com");
});
//import { from } from 'node:stream/iter';
*/

test('Sample Test', async ({ page }) => {
console.log(process.env.USERNAME);
console.log(process.env.PASSWORD);
await page.goto(process.env.BASE_URL!);
});

/*
test('get started link', async ({ page }) => {
    await page.goto('/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });


  test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test.
      await page.goto('/');
    });
  );
  */

