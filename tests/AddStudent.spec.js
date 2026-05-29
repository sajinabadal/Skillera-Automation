import { test, expect } from '@playwright/test';

test('Create student with dynamic data and logout', async ({ page }) => {

  // Dynamic Test Data

  const unique = Date.now();

  const firstName = `ram${unique}`;
  const lastName = `shree${unique}`;
  const email = `shree${unique}@gmail.com`;

  // Open Website

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

  // Go to Students Page

  await page.getByRole('link', {
    name: 'Students'
  }).click();

  // Add Student

  await page.getByRole('button', {
    name: 'Add Student'
  }).click();

  // Select Batch

  await page
    .getByRole('combobox')
    .filter({ hasText: 'Select a batch' })
    .click();

  await page.getByRole('textbox', {
    name: 'Search batches...'
  }).fill('summer');

  await page.getByRole('button', {
    name: 'Summer Batch'
  }).click();

  // Fill Student Details

  await page.getByRole('textbox', {
    name: 'First Name *'
  }).fill(firstName);

  await page.getByRole('textbox', {
    name: 'Last Name *'
  }).fill(lastName);

  await page.getByRole('textbox', {
    name: 'Email *'
  }).fill(email);

  // Select Gender

  await page
    .getByRole('combobox')
    .filter({ hasText: 'Select gender' })
    .click();

  await page
    .getByLabel('Female')
    .getByText('Female')
    .click();

  // Create Student

  await page.getByRole('button', {
    name: 'Create Student'
  }).click();

  // Wait for Done Button

  const doneButton = page.getByRole('button', {
    name: /done/i
  });

  await expect(doneButton).toBeVisible({
    timeout: 15000
  });

  await expect(doneButton).toBeEnabled();

  await doneButton.click();

  // Logout
 
  await page.getByRole('button', {
    name: /Rejmee aa/i
  }).click();

  await page.getByRole('menuitem', {
    name: 'Log out'
  }).click();

  // Verify Logout Success

  await expect(
    page.getByRole('button', {
      name: 'Sign In'
    })
  ).toBeVisible();

});