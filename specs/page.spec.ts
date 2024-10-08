import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://portfolio-kappa-lime-76.vercel.app");
});

test.describe("Page", () => {
  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("");
  });

  test("has Profile heading", async ({ page }) => {
    // Expects page to have a heading with the name of Nikolai Reyes.
    await expect(page.getByRole("heading", { name: "Nikolai Reyes" })).toBeVisible();
  });
});
