import { test, expect } from '@playwright/test';

test('Manager - Create, Update, Delete User and Logout', async ({ page }) => {


  // Test Data
 
  const id = Date.now();

  const fullName = `User_${id}`;
  const updatedFirstName = `Updated_${id}`;
  const email = `user_${id}@gmail.com`;

  // Open Application

  await page.goto('https://skillera-saas-frontend.vercel.app/');

  // Login

  await page.getByRole('textbox', {
    name: 'Email Address'
  }).fill('rejmee@gmail.com');

  await page.getByRole('textbox', {
    name: 'Password'
  }).fill('Welcome@123');

  await page.getByRole('button', {
    name: 'Sign In'
  }).click();

  await page.waitForLoadState('networkidle');

  // Navigate to Users

  await page.getByRole('link', {
    name: 'Users'
  }).click();

  // CREATE USER

  await page.getByRole('button', {
    name: 'Create User'
  }).click();

  await page.getByRole('textbox', {
    name: 'Full Name'
  }).fill(fullName);

  await page.getByRole('textbox', {
    name: 'Email'
  }).fill(email);

  await page.getByRole('button', {
    name: 'Create User'
  }).click();

  // Verify creation
  await expect(page.getByText(email)).toBeVisible();

  // UPDATE USER

  await page.getByRole('button')
    .filter({ hasText: /^$/ })
    .nth(1)
    .click();

  await page.getByRole('textbox', {
    name: 'First Name'
  }).fill(updatedFirstName);

  await page.getByRole('button', {
    name: 'Update User'
  }).click();

  // Verify update
  await expect(page.getByText(updatedFirstName)).toBeVisible();

  // DELETE USER

  await page.getByRole('button')
    .filter({ hasText: /^$/ })
    .nth(2)
    .click();

  await page.getByRole('button', {
    name: 'Delete'
  }).click();

  // Verify deletion
  
  await expect(page.getByText(email)).not.toBeVisible();

  // LOGOUT

  await page.getByRole('button', {
    name: /Rejmee aa/i
  }).click();

  await page.getByRole('menuitem', {
    name: 'Log out'
  }).click();

  // Verify logout success

  await expect(
    page.getByRole('button', {
      name: 'Sign In'
    })
  ).toBeVisible();

});

 