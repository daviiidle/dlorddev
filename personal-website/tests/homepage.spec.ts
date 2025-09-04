import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the main heading and navigation', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: 'Automation Engineer' })).toBeVisible();
    await expect(page.getByText('Building robust test automation frameworks')).toBeVisible();
    
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('should show projects section', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
    await expect(page.getByText('API Test Automation Framework')).toBeVisible();
    await expect(page.getByText('CI/CD Pipeline Orchestrator')).toBeVisible();
    await expect(page.getByText('Web UI Test Suite')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    await page.getByRole('link', { name: 'View My Work' }).click();
    await expect(page.locator('#projects')).toBeInViewport();
  });

  test('should display contact section', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: 'Let\'s Connect' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Email Me' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: 'Automation Engineer' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
  });
});