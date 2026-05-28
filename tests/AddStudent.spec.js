import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://skillera-saas-frontend.vercel.app/');

  // Login
  await page.getByRole('textbox', { name: 'Email Address' }).fill('rejmee@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');

  await page.getByRole('button', { name: 'Sign In' }).click();

  // Go to Students
  await page.getByRole('link', { name: 'Students' }).click();

  // Add Student
  await page.getByRole('button', { name: 'Add Student' }).click();

  // Select batch (search + select)
  await page.getByRole('combobox').filter({ hasText: 'Select a batch' }).click();

  await page.getByRole('textbox', { name: 'Search batches...' }).fill('summer');

  await page.getByRole('button', { name: 'Summer Batch' }).click();

  // Fill student details
  await page.getByRole('textbox', { name: 'First Name *' }).fill('ram');
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('shree');
  await page.getByRole('textbox', { name: 'Email *' }).fill('shree@gmail.com');

  // Gender
  await page.getByRole('combobox').filter({ hasText: 'Select gender' }).click();
  await page.getByLabel('Female').getByText('Female').click();

  // Create student
  await page.getByRole('button', { name: 'Create Student' }).click();

// wait for Done safely
const doneButton = page.getByRole('button', { name: /done/i });

await expect(doneButton).toBeVisible({ timeout: 15000 });
await expect(doneButton).toBeEnabled();

await doneButton.click();

  // -------------------------
  // LOGOUT (FIXED PART)
  // -------------------------

  await page.getByRole('button', {
    name: /Rejmee aa/i
  }).click();

  await page.getByRole('menuitem', {
    name: 'Log out'
  }).click();

  // Verify logout success
  await expect(
    page.getByRole('button', { name: 'Sign In' })
  ).toBeVisible();

});