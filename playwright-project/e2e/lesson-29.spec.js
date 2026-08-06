import { test, expect } from '../src/fixtures/userGaragePage.fixture';

test.describe('User Garage Page tests', () => {
    test('change profile response body', async ({ userGaragePage }) => {
        await userGaragePage.route(
            '**/public/images/users/testpic.jpg',
            async (route) => {
                await route.fulfill({
                    status: 200,
                    contentType: 'image/jpg',
                    path: './src/testPhoto/testpic.jpg',
                });
            },
        );

        await userGaragePage.route('**/api/users/profile', async (route) => {
            const response = await route.fetch();
            const body = await response.json();
            body.data.userId = '777777';
            body.data.photoFilename = 'testpic.jpg';
            body.data.name = 'Jason';
            body.data.lastName = 'Dureno';
            await route.fulfill({
                status: response.status(),
                headers: response.headers(),
                body: JSON.stringify(body),
            });
        });
        await userGaragePage.goto('/panel/profile');
        await expect(
            userGaragePage.locator('.profile_name.display-4'),
        ).toHaveText('Jason Dureno');
        await expect(userGaragePage.locator('.profile_photo')).toHaveAttribute(
            'src',
            'https://qauto.forstudy.space/public/images/users/testpic.jpg',
        );
    });
});
