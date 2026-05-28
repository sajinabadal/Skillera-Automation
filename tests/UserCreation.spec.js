import { test, expect } from '@playwright/test';

test('Manager creates Trainer user and logs out', async ({ page }) => {

  const userName = `nice_${Date.now()}`;
  const userEmail = `${userName}@gmail.com`;

  // Open app
  await page.goto('https://skillera-saas-frontend.vercel.app/');

  // Login (Manager)
  await page.getByRole('textbox', { name: 'Email Address' }).fill('rejmee@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');

  await page.getByRole('button', { name: 'Sign In' }).click();

  // Wait for dashboard
  await page.waitForLoadState('networkidle');

  // Navigate to Users
  await page.getByRole('link', { name: 'Users' }).click();

  // Create User
  await page.getByRole('button', { name: 'Create User' }).click();

  await page.getByRole('textbox', { name: 'Full Name' }).fill(userName);
  await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);

  // Select role Trainer
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Trainer' }).click();

  // Submit
  await page.getByRole('button', { name: 'Create User' }).click();

  // Verify user created
  await expect(page.getByText(userEmail)).toBeVisible();

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

 