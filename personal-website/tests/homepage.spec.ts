import { expect, test } from "@playwright/test";

test.describe("Portfolio homepage", () => {
  test("shows recruiter-focused automation positioning and navigation", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "I turn complex systems into reliable, repeatable automation." })).toBeVisible();
    await expect(page.getByText("Automation Engineer | Quality Engineering & Test Automation", { exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: /Email me/ }).first()).toHaveAttribute("href", /mailto:/);
    await expect(page.getByRole("link", { name: "LinkedIn ↗", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "About", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Projects", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Experience", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Evidence", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact", exact: true })).toBeVisible();
  });

  test("filters projects and expands project details", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Commercial Kitchen CRM" })).toBeVisible();
    await page.getByRole("button", { name: "Automation" }).click();
    await expect(page.getByRole("heading", { name: "Playwright TypeScript" })).toBeVisible();
    await page.getByRole("heading", { name: "Playwright TypeScript" }).locator("xpath=ancestor::article[1]").getByText("More detail").first().click();
    await expect(page.getByText("A public practice framework showing Playwright fixtures, maintainable selectors, test structure, and CI execution.")).toBeVisible();
  });

  test("shows the website and full-stack case studies", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Websites" }).click();
    await expect(page.getByRole("heading", { name: "RetailChill Refrigeration" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Commercial Kitchen AUS" })).toBeVisible();
    await page.getByRole("button", { name: "Full-stack" }).click();
    await expect(page.getByRole("heading", { name: "Commercial Kitchen Canopy Supply" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Venio" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Live site ↗" }).first()).toHaveAttribute("href", "https://commercialkitchencanopysupply.com.au/");
  });

  test("shows experience, stack, and contact", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Engineering with a quality mindset." })).toBeVisible();
    await expect(page.getByText("Planit Testing / NRI Australia")).toBeVisible();
    await expect(page.getByText("Open more evidence")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Tools I use to ship." })).toBeHidden();
    await expect(page.getByRole("heading", { name: /Let's make it/ })).toBeVisible();
  });

  test("restores the professional story and automation evidence", async ({ page }) => {
    await page.goto("/");
    await page.getByText("Read the full career story").click();
    await expect(page.getByText(/At Judo Bank, I moved from system and integration testing/)).toBeVisible();
    await expect(page.getByText("186").first()).toBeVisible();
    await expect(page.getByText("213").first()).toBeVisible();
    await page.getByText("Open more evidence").click();
    await page.getByText("Open automation evidence").click();
    await expect(page.getByText("Cypress").last()).toBeVisible();
    await expect(page.getByText("8/8")).toBeVisible();
  });

  test("restores homelab screenshots, certifications, and the project library", async ({ page }) => {
    await page.goto("/");
    await page.getByText("Open more evidence").click();
    await page.getByText("Open homelab case studies").click();
    await expect(page.getByText("Home Dashboard Next")).toBeVisible();
    await expect(page.getByAltText("Home Dashboard Next")).toBeVisible();
    await expect(page.getByText("Immich")).toBeVisible();
    await expect(page.getByText("ISTQB Certified Tester Foundation Level 4.0")).toBeVisible();
    await page.getByRole("button", { name: "Automation" }).click();
    await expect(page.getByRole("heading", { name: "Cypress-Automation-Framework" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Appium-Java-Mobile-Framework" })).toBeVisible();
  });

  test("opens mobile navigation", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await page.getByRole("button", { name: "Toggle navigation" }).click();
    await expect(page.getByRole("link", { name: "Contact", exact: true })).toBeVisible();
  });
});
