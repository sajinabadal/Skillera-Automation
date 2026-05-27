import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skillera-saas-frontend.vercel.app/');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('rejmee@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Students' }).click();
  await page.getByRole('button', { name: 'Add Student' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Select a batch' }).click();
  await page.getByRole('button', { name: 'Winter Batch' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('jahn');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('doe');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('jahn@gmail.com');
  await page.getByRole('textbox', { name: 'Default Password *' }).dblclick();
  await page.getByRole('textbox', { name: 'Default Password *' }).fill('Welcome@123');
  await page.getByRole('combobox').filter({ hasText: 'Select gender' }).click();
  await page.getByLabel('Male', { exact: true }).getByText('Male').click();
  await page.getByRole('button', { name: 'Create Student' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('button', { name: 'RA Rejmee aa rejmee@gmail.com' }).click();
});