import { test, expect } from "@playwright/test";

test("Navigation: user can view venue details from home", async ({ page }) => {
  // 1. Go to the homepage
  await page.goto("http://localhost:5173/");

  // 2. Wait for the venue list to load (adjust selector as needed)
  await page.waitForSelector(".venue-card");

  // 3. Click the first venue card
  await page.locator(".venue-card").first().click();

  // 4. Assert "Venue details" heading exists
  const heading = await page.locator("h1");
  await expect(heading).toContainText("Venue details");
});
