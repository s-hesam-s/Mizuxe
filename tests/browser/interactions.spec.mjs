import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const pages = JSON.parse(fs.readFileSync(new URL('../../docs/browser-pages.json', import.meta.url), 'utf8'));
const pageErrors = new WeakMap();
test.beforeEach(async ({ page }) => {
  const errors = []; pageErrors.set(page, errors);
  page.on('pageerror', error => errors.push(error.message));
});
test.afterEach(async ({ page }) => { expect(pageErrors.get(page)).toEqual([]); });
for (const file of pages) {
  test(`${file}: local images, responsive width and JavaScript`, async ({ page }) => {
    await page.goto('/' + file);
    await expect(page.locator('body')).toBeVisible();
    await expect.poll(() => page.evaluate(() => [...document.images]
      .filter(img => img.src.startsWith(location.origin))
      .every(img => img.complete && img.naturalWidth > 0))).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  });
}

test('accordion changes the visible answer', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-bs-target="#collapseTwo"]').click();
  await expect(page.locator('#collapseTwo')).toBeVisible();
  await expect(page.locator('#collapseOne')).toBeHidden();
  await page.locator('[data-bs-target="#collapseThree"]').click();
  await expect(page.locator('#collapseThree')).toBeVisible();
  await expect(page.locator('#collapseTwo')).toBeHidden();
});
