import { test, expect } from '../src/fixtures/userGaragePage.fixture';

test.describe('User Garage Page tests', () => {
    test.afterEach(async ({ userGaragePage }) => {
        await userGaragePage.locator('.icon-edit').click();
        await userGaragePage
            .getByRole('button', { name: 'Remove car' })
            .click();
        await userGaragePage.getByRole('button', { name: 'Remove' }).click();
        await expect(userGaragePage.locator('.car_name.h2')).not.toBeVisible();
    });
    test('add a new car', async ({ userGaragePage }) => {
        await userGaragePage.getByRole('button', { name: 'Add Car' }).click();
        await expect(userGaragePage.locator('.modal-content')).toBeVisible();
        await userGaragePage.fill('#addCarMileage', '10000');
        await userGaragePage.getByRole('button', { name: 'Add' }).click();
        await expect(userGaragePage.locator('.car_name.h2')).toHaveText(
            'Audi TT',
        );
    });
});
