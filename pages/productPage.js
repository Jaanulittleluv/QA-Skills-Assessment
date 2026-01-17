class ProductPage {
    constructor(page){
        this.page = page;
        // this.searchBox = page.locator('#gh-ac');
        // this.searchButton = page.locator('#gh-btn');
        // this.firstProducts = page.locator('s-item__link').first();
        this.relatedSection = page.locator('section:has-text("Similar items"), section:has-text("Sponsored items")').first();
        this.productCards = this.relatedSection.locator('.s-item, .v-product-card');
        this.productTitles = this.relatedSection.locator('.s-item__title');
        this.productPrices = this.relatedSection.locator('s-item__price');
        this.productImages = this.relatedSection.locator('img');
    }

    async searchForProduct(itemName){
        await this.page.goto('https://www.ebay.com/itm/376154395645');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.evaluate(() => window.scrollBy(0,2000));
        // await this.searchBox.fill(itemName);
        // await this.searchButton.click();
        // await this.firstProducts.click();
    }

    async getRelatedProductsCount(){
        return await this.productCards.count();
    }

    async getProductTitles(){
        return await this.productTitles.allInnerTexts();
    }

    async getProductPrices(){
        return await this.productPrices.allInnerTexts();
    }
}

export default { ProductPage };