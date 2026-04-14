import { test, expect } from '@playwright/test';

test.describe('Cart - Add and Remove products', () => {

  test.beforeEach(async ({ page }) => {
    // Given - I am on the Home page
    await page.goto('/');
  });

  test('cart counter is 0 on page load', async ({ page }) => {
    // Then - the badge displays 0
    await expect(page.getByTestId('cart-count')).toContainText('0');
  });

  test('cart counter increments after each product added', async ({ page }) => {
    // Given - I read the initial counter value
    const cartCountEl = page.getByTestId('cart-count');
    const initialCount = parseInt(await cartCountEl.innerText());

    // When - I click on MYBABY Pants
    await page.getByText('MYBABY Pants').click();

    // And - I add it to the cart
    await page.getByRole('button', { name: 'AJOUTER AU PANIER' }).click();

    // Then - the counter has increased by 1
    await expect(cartCountEl).toContainText(String(initialCount + 1));

    // When - I go back without reloading and add MYBABY Diapers
    await page.getByRole('link', { name: 'Site' }).click();
    await page.getByText('MYBABY Diapers').click();
    await page.getByRole('button', { name: 'AJOUTER AU PANIER' }).click();

    // Then - the counter has increased by 1 again
    await expect(cartCountEl).toContainText(String(initialCount + 2));
  });

  test('cart contains 1 item after adding a product', async ({ page }) => {
    // When - I add a product to the cart
    await page.getByText('MYBABY Pants').click();
    await page.getByRole('button', { name: 'AJOUTER AU PANIER' }).click();

    // And - I navigate to the cart page
    await page.getByTestId('cart-link').click();

    // Then - 1 item is displayed in the cart
    await expect(page.getByTestId('cart-item')).toHaveCount(1);
  });

  test.skip('cart counter decrements after removing a product', async ({ page }) => {
    // TODO: useRemoveFromCart not yet implemented
  // Bug detected by E2E tests — cart counter not updated after removal
    // Given - I have 1 product in the cart
    await page.getByText('MYBABY Pants').click();
    await page.getByRole('button', { name: 'AJOUTER AU PANIER' }).click();

    // When - I navigate to the cart and remove the product
    await page.getByTestId('cart-link').click();
    await page.getByRole('button', { name: 'RETIRER DU PANIER' }).click();

    // Then - the cart is empty
    await expect(page.getByTestId('cart-item')).toHaveCount(0);

    // And - the counter is back to 0
    await expect(page.getByTestId('cart-count')).toContainText('0');
  });

  test('same product cannot be added twice', async ({ page }) => {
    // Given - I read the initial counter value
    const cartCountEl = page.getByTestId('cart-count');
    const initialCount = parseInt(await cartCountEl.innerText());

    // When - I add MYBABY Pants once
    await page.getByText('MYBABY Pants').click();
    await page.getByRole('button', { name: 'AJOUTER AU PANIER' }).click();

    // And - I go back without reloading and try to add the same product again
    await page.getByRole('link', { name: 'Site' }).click();
    await page.getByText('MYBABY Pants').click();
    await page.getByRole('button', { name: 'AJOUTER AU PANIER' }).click();

    // Then - the counter is still initialCount + 1 (no duplicate)
    await expect(cartCountEl).toContainText(String(initialCount + 1));
  });

});