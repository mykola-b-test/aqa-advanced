import { test as base, expect } from '@playwright/test';

const authFilePath = '.auth/user.json';

const test = base.extend({
    userGaragePage: async ({ page }, use) => {
        await page.context().setStorageState(authFilePath);
        await page.goto(`${process.env.BASE_URL}/panel/garage`);
        await expect(page).toHaveURL(/panel\/garage/);

        await use(page);
    },
});

export { test, expect };
