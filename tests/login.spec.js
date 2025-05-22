import { test, expect } from "@playwright/test";

test("Login with valid credentials", async ({ page }) => {
  await page.goto("http://localhost:5173"); // change if different
  await page.click("text=Login");
  await page.fill("input[name=email]", process.env.VITE_EMAIL);
  await page.fill("input[name=password]", process.env.VITE_PASSWORD);
  await page.click("button[type=submit]");
  await expect(page.locator("text=Profile")).toBeVisible();
});

test("Login with invalid credentials shows error", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.click("text=Login");
  await page.fill("input[name=email]", "wrong@example.com");
  await page.fill("input[name=password]", "wrongpass");
  await page.click("button[type=submit]");
  await expect(page.locator("text=Invalid")).toBeVisible();
});
