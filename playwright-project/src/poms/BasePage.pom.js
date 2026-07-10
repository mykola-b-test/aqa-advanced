export class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     * @param {string} url
     */
    
    constructor(page, url) {    
        this._page = page;
        this._url = url;
    }

    async open() {
        if(!this._url) {
            throw new Error('Wrong page URL');
        }
        await this._page.goto(this._url);
    }
}