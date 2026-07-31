import { test, expect } from '@playwright/test';

const authFilePath = '.auth/user.json';

test.describe('Single Login', () => {
    test('authenticate user', async ({ page }) => {
        await page.goto(process.env.BASE_URL);
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.fill('#signinEmail', process.env.DEFAULT_USER_EMAIL);
        await page.fill('#signinPassword', process.env.DEFAULT_USER_PASSWORD);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL(/panel\/garage/);
        await page.context().storageState({ path: authFilePath });
    });
});
