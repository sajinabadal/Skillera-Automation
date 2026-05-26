import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skillera-saas-frontend.vercel.app/');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('rejmee@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Users' }).click();
  await page.getByRole('button', { name: 'Create User' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('abc');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('abc@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).dblclick();
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Trainer' }).click();
  await page.getByRole('button', { name: 'Create User' }).click();
});

