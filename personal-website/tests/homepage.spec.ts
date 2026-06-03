import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test('displays the full-bleed hero and navigation', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Quality Assurance & Automation Engineer' })).toBeVisible();
    await expect(page.getByText('Hybrid QA Engineer')).toBeVisible();

    await expect(page.getByRole('link', { name: 'Automation Health' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('shows CI health evidence and metrics', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Automation Health' })).toBeVisible();
    await expect(page.getByLabel('Automation metrics').getByText('100%')).toBeVisible();
    await expect(page.getByText('8 of 8 framework pipelines passing')).toBeVisible();
    await expect(page.getByText('Playwright MCP AI')).toBeVisible();
    await expect(page.getByText('0 21 * * *')).toBeVisible();
  });

  test('shows the upgraded project portfolio', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'ITAF-DotNet-CSharp' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Postman-Decoupling-Framework' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Playwright-MCP-AI-Framework' })).toBeVisible();
  });

  test('has working project navigation', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'View My Work' }).click();
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
  });

  test('displays contact section', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: "Interested in automation, testing, or have a project in mind? I'd love to hear from you." })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Email Me' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  });

  test('is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Quality Assurance & Automation Engineer' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Automation Health' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
  });
});
