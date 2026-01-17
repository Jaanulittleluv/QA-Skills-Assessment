import { test, expect } from '@playwright/test';
const { ProductPage } = require('../pages/productPage').default;

test.describe('eBay Related Best Seller Products QA Skill Automation', () => {
  test('Test 10 scenarios from test cases', async ({ page }) => {
    const productPage = new ProductPage(page);

    // await productPage.searchForProduct('Men Wallet');
    await expect(productPage.relatedSection).toBeVisible({ timeout: 30000 });

    const count = await productPage.getRelatedProductsCount();
    expect(count).toBeLessThanOrEqual(6);

    const titles = await productPage.getProductTitles();
    for(let title of titles){
      expect(title.toLowerCase()).toContain('wallet');
    }

    const prices = await productPage.getProductPrices();
    for(let price of prices){
      expect(price).toContain('$');
    }

    const isImgVisible = await productPage.productImages.first().isVisible();
    expect(isImgVisible).toBeTruthy();

    const cardText = await productPage.productCards.first().innerText();
    expect(cardText.length).toBeGreaterThan(0);

    await page.setViewportSize({ width:375, height: 667 });
    await expect(productPage.relatedSection).toBeVisible();

    const allTitles = await productPage.productTitles.allInnerTexts();
    const mainProductTitle = "376154395645";
    expect(allTitles).not.toContain(mainProductTitle);

    await page.reload();
    await expect(productPage.relatedSection).toBeVisible();

    await expect(productPage.productCards.first().toBeEnabled());
  });
});
