import { test, expect } from '@playwright/test';
const { ProductPage } = require('../pages/productPage').default;

test.describe('eBay Related Best Seller Products QA Skill Automation', () => {
  test('Test 10 scenarios from test cases', async ({ page }) => {
    const productPage = new ProductPage(page);

    // await productPage.searchForProduct('Men Wallet');

    // Testcase ID derived from detailed testcases (manual testing): TC01
    await expect(productPage.relatedSection).toBeVisible({ timeout: 30000 });

    // Testcase ID derived from detailed testcases (manual testing): TC02
    const count = await productPage.getRelatedProductsCount();
    expect(count).toBeLessThanOrEqual(6);

    // Testcase ID derived from detailed testcases (manual testing): TC03
    const titles = await productPage.getProductTitles();
    for(let title of titles){
      expect(title.toLowerCase()).toContain('wallet');
    }

    // Testcase ID derived from detailed testcases (manual testing): TC04
    const prices = await productPage.getProductPrices();
    for(let price of prices){
      expect(price).toContain('$');
    }

    // Testcase ID derived from detailed testcases (manual testing): TC06
    const isImgVisible = await productPage.productImages.first().isVisible();
    expect(isImgVisible).toBeTruthy();

    // Testcase ID derived from detailed testcases (manual testing): TC08
    const cardText = await productPage.productCards.first().innerText();
    expect(cardText.length).toBeGreaterThan(0);

    // Testcase ID derived from detailed testcases (manual testing): TC10
    await page.setViewportSize({ width:375, height: 667 });
    await expect(productPage.relatedSection).toBeVisible();

    // Testcase ID derived from detailed testcases (manual testing): TC13
    const allTitles = await productPage.productTitles.allInnerTexts();
    const mainProductTitle = "376154395645";
    expect(allTitles).not.toContain(mainProductTitle);

    // Testcase ID derived from detailed testcases (manual testing): TC16
    await page.reload();
    await expect(productPage.relatedSection).toBeVisible();

    // Testcase ID derived from detailed testcases (manual testing): TC17
    await expect(productPage.productCards.first().toBeEnabled());
  });
});
