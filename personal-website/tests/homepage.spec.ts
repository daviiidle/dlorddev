import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test('displays the full-bleed hero and navigation', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Automation-focused Quality Engineer.' })).toBeVisible();
    await expect(page.getByText('Hybrid QA Engineer')).toBeVisible();

    await expect(page.getByRole('link', { name: 'Story' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Automation Evidence' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('lets recruiters expand the professional story', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('A practical path from functional QA to automation ownership.')).toBeVisible();
    await page.getByText('Read the full career story').click();
    await expect(page.getByText('I entered the software testing industry in 2022')).toBeVisible();
    await expect(page.getByText('186', { exact: true })).toBeVisible();
    await expect(page.getByText('Super Nova Award')).toBeVisible();
  });

  test('shows CI health evidence and metrics', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Automation Evidence' })).toBeVisible();
    await expect(page.locator('.metric-card--dark strong', { hasText: '8/8' })).toBeVisible();
    await expect(page.getByText('framework pipelines green in the latest checked runs')).toBeVisible();
    await expect(page.getByText('Playwright MCP AI')).toBeVisible();
    await expect(page.getByText('0 21 * * *')).toBeVisible();
  });

  test('shows the upgraded project portfolio', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
    await expect(page.getByText('These are personal projects, portfolio frameworks, and lab systems')).toBeVisible();
    await expect(page.getByText('They are not presented as client-delivered products.')).toBeVisible();
    await expect(page.getByText('For recruiters and hiring teams')).toBeVisible();
    await expect(page.getByText('Self-directed portfolio').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'ITAF-DotNet-CSharp' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Postman-Decoupling-Framework' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Playwright-MCP-AI-Framework' })).toBeVisible();
  });

  test('shows the homelab systems showcase', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('strong').filter({ hasText: 'Homelab Systems' })).toBeVisible();
    await page.getByText('Open the server cupboard').click();
    await expect(page.getByRole('heading', { name: 'Home Dashboard Next' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Granny Flat Billing' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Main House Energy' })).toBeVisible();
    await expect(page.getByText('Private repos for home-specific implementation details')).toBeVisible();
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

    await expect(page.getByRole('heading', { name: 'Automation-focused Quality Engineer.' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Automation Evidence' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
  });
});
