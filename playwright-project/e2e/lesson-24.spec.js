import { test, expect } from '@playwright/test';

test.describe('Example test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
      });
    //--- Registration form elements visibility tests ---
    test('check the registration form elements visibility', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        await expect(page.locator('.modal-content')).toBeVisible();
        await expect(page.locator('#signupName')).toBeVisible();
        await expect(page.locator('#signupLastName')).toBeVisible();
        await expect(page.locator('#signupEmail')).toBeVisible();
        await expect(page.locator('#signupPassword')).toBeVisible();
        await expect(page.locator('#signupRepeatPassword')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
        await page.getByRole('button', { name: 'Close' }).click();
        // await page.pause();
    });
    //--- Success registration flow tests ---
    test('check the ability to register new user with valid user data', async ({ page }) => {
        await page.getByRole('button', { name: 'Sign Up' }).click();
        await page.locator('#signupName').fill('Alex');
        await page.locator('#signupLastName').fill('Brewneck');
        const uniqueEmail = `aqa-alex.brewneck+${Date.now()}@example.com`;
        await page.locator('#signupEmail').fill(uniqueEmail);
        await page.locator('#signupPassword').fill('Password123');
        await page.locator('#signupRepeatPassword').fill('Password123');
        await page.getByRole('button', { name: 'Register' }).click();
        await expect(page.locator('.alert-success')).toHaveText('Registration complete');
        await expect(page).toHaveURL(/panel\/garage/);
        // await page.pause();
    });
    //--- Register button validation tests ---
    test('check the Register button is enabled when all fields are valid', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
        await page.locator('#signupName').fill('Alex');
        await page.locator('#signupLastName').fill('Brewneck');
        const uniqueEmail = `aqa-alex.brewneck+${Date.now()}@example.com`;
        await page.locator('#signupEmail').fill(uniqueEmail);
        await page.locator('#signupPassword').fill('Password123');
        await page.locator('#signupRepeatPassword').fill('Password123');
        await expect(page.getByRole('button', { name: 'Register' })).toBeEnabled();
        // await page.pause();
    });
        //--- Name field validation tests ---
    test('check the "Name required" error message is displayed when the Name field is empty', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const nameInput = await page.locator('#signupName');
        await nameInput.focus();
        await nameInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name required');
        await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await nameInput.fill('Alex');
        await nameInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        // await page.pause();
    });
    
    test('check the "Name is invalid" error message is displayed when the Name field contains invalid characters', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const nameInput = await page.locator('#signupName');
        await nameInput.fill('Alex123');
        await nameInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name is invalid');
        await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // await page.pause();
    }); 

    test('check the "Name have to be 2-20 characters long" error message is displayed when the Name field wrong length', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const nameInput = await page.locator('#signupName');
        await nameInput.fill('A');
        await nameInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name has to be from 2 to 20 characters long');
        await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await nameInput.fill('Aa');
        await nameInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        await nameInput.fill('Aaaaaaaaaaaaaaaaaaaaa');
        await nameInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Name has to be from 2 to 20 characters long');
        await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await nameInput.fill('Aaaaaaaaaaaaaaaaaaaa');
        await nameInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        // await page.pause();
    });
    
        //--- Last Name field validation tests ---
    test('check the "Last Name required" error message is displayed when the Last Name field is empty', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const lastNameInput = await page.locator('#signupLastName');
        await lastNameInput.focus();
        await lastNameInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name required');
        await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await lastNameInput.fill('Brewneck');
        await lastNameInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        // await page.pause();
    });

    test('check the "Last name is invalid" error message is displayed when the Last Name field contains invalid characters', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const lastNameInput = await page.locator('#signupLastName');
        await lastNameInput.fill('Brewneck123');
        await lastNameInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name is invalid');
        await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // await page.pause();
    });

    test('check the "Last name have to be 2-20 characters long" error message is displayed when the Last Name field wrong length', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const lastNameInput = await page.locator('#signupLastName');
        await lastNameInput.fill('A');
        await lastNameInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await lastNameInput.fill('Aa');
        await lastNameInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        await lastNameInput.fill('Aaaaaaaaaaaaaaaaaaaaa');
        await lastNameInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Last name has to be from 2 to 20 characters long');
        await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await lastNameInput.fill('Aaaaaaaaaaaaaaaaaaaa');
        await lastNameInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        // await page.pause();
    });

        //--- Email field validation tests ---
    test('check the "Email required" error message is displayed when the Email field is empty', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const emailInput = await page.locator('#signupEmail');
        await emailInput.focus();
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email required');
        await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        const uniqueEmail = `aqa-alex.brewneck+${Date.now()}@example.com`;
        await emailInput.fill(uniqueEmail);
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        // await page.pause();
    });

    test('check the "Email is incorrect" error message is displayed when the Email field contains invalid characters or dismisses required parts', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const emailInput = await page.locator('#signupEmail');
        await emailInput.fill('@example.com');
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await emailInput.fill('alex@example.com');
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        await emailInput.fill('alexexample.com');
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await emailInput.fill('alex@example.com');
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        await emailInput.fill('alex@.com');
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await emailInput.fill('alex@example.com');
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        await emailInput.fill('alex@example');
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await emailInput.fill('alex@example.com');
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        await emailInput.fill('al ex@example.com');
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await emailInput.fill('alex@example.com');
        await emailInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        // await page.pause();
    });
    //--- Password field validation tests ---
    test('check the "Password required" error message is displayed when the Password field is empty', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const passwordInput = await page.locator('#signupPassword');
        await passwordInput.focus();
        await passwordInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password required');
        await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // await page.pause();
    });
    
    test('check the validation messages are displayed when the Password field gets wrong data', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const passwordInput = await page.locator('#signupPassword');
        // Password is too short
        await passwordInput.fill('Pass123');
        await passwordInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // Password is too long
        await passwordInput.fill('Password12345678');
        await passwordInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // Password doesn't contain at least one capital letter
        await passwordInput.fill('password123');
        await passwordInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // Password doesn't contain at least one integer
        await passwordInput.fill('PasswordABC');
        await passwordInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // Password doesn't contain at least one small letter
        await passwordInput.fill('PASSWORD123');
        await passwordInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // Valid password
        await passwordInput.fill('Password123');
        await passwordInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        // await page.pause();
    });
    //--- Re-enter password field validation tests ---
    test('check the "Re-enter password required" error message is displayed when the Re-enter password field is empty', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const reenterPasswordInput = await page.locator('#signupRepeatPassword');
        await reenterPasswordInput.focus();
        await reenterPasswordInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Re-enter password required');
        await expect(reenterPasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // await page.pause();
    });
    test('check the "Passwords do not match" error message is displayed when the Re-enter password field does not match the Password field', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign Up' }).click();
        const passwordInput = await page.locator('#signupPassword');
        const reEnterPasswordInput = await page.locator('#signupRepeatPassword');
        await passwordInput.fill('Password123');
        await reEnterPasswordInput.fill('Password1234');
        await reEnterPasswordInput.blur();
        await expect(page.locator('.invalid-feedback')).toHaveText('Passwords do not match');
        await expect(reEnterPasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await reEnterPasswordInput.fill('Password123');
        await reEnterPasswordInput.blur();
        await expect(page.locator('.invalid-feedback')).not.toBeVisible();
        // await page.pause();
    });
});