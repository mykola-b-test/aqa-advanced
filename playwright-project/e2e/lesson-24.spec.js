import { test, expect } from '@playwright/test';
import { RegistrationForm } from '../src';

/**
 * @type {RegistrationForm}
 */
let registrationForm;   
test.describe('Example test', () => {
    test.beforeEach(async ({ page }) => {
        registrationForm = new RegistrationForm(page);
        await registrationForm.open();
      });
    //--- Registration form elements visibility tests ---
    test('check the registration form elements visibility', async ({ page }) => {
        await expect(registrationForm.getButton('signUp')).toBeVisible();
        await registrationForm.clickSignUpButton();   
        await expect(registrationForm.getModalContent()).toBeVisible();
        await expect(registrationForm.getInputField('name')).toBeVisible();
        await expect(registrationForm.getInputField('lastName')).toBeVisible();
        await expect(registrationForm.getInputField('email')).toBeVisible();
        await expect(registrationForm.getInputField('password')).toBeVisible();
        await expect(registrationForm.getInputField('repeatPassword')).toBeVisible();
        await expect(registrationForm.getButton('register')).toBeVisible();
        await expect(registrationForm.getButton('close')).toBeVisible();
        await registrationForm.clickCloseButton();
        // await page.pause();
    });
    //--- Success registration flow tests ---
    test('check the ability to register new user with valid user data', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillRegisterFormValidData('Alex', 'Brewneck', 'Password123');
        await registrationForm.clickRegisterButton();
        await expect(registrationForm.getSuccessMessage('Registration complete')).toBeVisible();
        await expect(registrationForm.getPageURL()).toContain('/panel/garage');
        // await page.pause();
    });
    //--- Register button validation tests ---
    test('check the Register button is enabled when all fields are valid', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await expect(registrationForm.getButton('register')).toBeDisabled();
        await registrationForm.fillRegisterFormValidData('Alex', 'Brewneck', 'Password123');
        await expect(registrationForm.getButton('register')).toBeEnabled();
        // await page.pause();
    });
        //--- Name field validation tests ---
    test('check the "Name required" error message is displayed when the Name field is empty', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillInputField('name', '');
        await expect(registrationForm.getErrorMessage('Name required')).toBeVisible();
        await expect(registrationForm.getInputField('name')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('name', 'Alex');
        await expect(registrationForm.getErrorMessage('Name required')).not.toBeVisible();
        await expect(registrationForm.getInputField('name')).not.toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // await page.pause();
    });
    
    test('check the "Name is invalid" error message is displayed when the Name field contains invalid characters', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillInputField('name', 'Alex123');
        await expect(registrationForm.getErrorMessage('Name is invalid')).toBeVisible();
        await expect(registrationForm.getInputField('name')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // await page.pause();
    }); 

    test('check the "Name have to be 2-20 characters long" error message is displayed when the Name field wrong length', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillInputField('name', 'A');
        await expect(registrationForm.getErrorMessage('Name has to be from 2 to 20 characters long')).toBeVisible();
        await expect(registrationForm.getInputField('name')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('name', 'Aa');
        await expect(registrationForm.getErrorMessage('Name has to be from 2 to 20 characters long')).not.toBeVisible();
        await registrationForm.fillInputField('name', 'Aaaaaaaaaaaaaaaaaaaaa');
        await expect(registrationForm.getErrorMessage('Name has to be from 2 to 20 characters long')).toBeVisible();
        await expect(registrationForm.getInputField('name')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('name', 'Aaaaaaaaaaaaaaaaaaaa');
        await expect(registrationForm.getErrorMessage('Name has to be from 2 to 20 characters long')).not.toBeVisible();
        // await page.pause();
    });
    
        //--- Last Name field validation tests ---
    test('check the "Last Name required" error message is displayed when the Last Name field is empty', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillInputField('lastName', '');
        await expect(registrationForm.getErrorMessage('Last name required')).toBeVisible();
        await expect(registrationForm.getInputField('lastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('lastName', 'Brewneck');
        await expect(registrationForm.getErrorMessage('Last name required')).not.toBeVisible();
        // await page.pause();
    });

    test('check the "Last name is invalid" error message is displayed when the Last Name field contains invalid characters', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillInputField('lastName', 'Brewneck123');
        await expect(registrationForm.getErrorMessage('Last name is invalid')).toBeVisible();
        await expect(registrationForm.getInputField('lastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // await page.pause();
    });

    test('check the "Last name have to be 2-20 characters long" error message is displayed when the Last Name field wrong length', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillInputField('lastName', 'A');
        await expect(registrationForm.getErrorMessage('Last name has to be from 2 to 20 characters long')).toBeVisible();
        await expect(registrationForm.getInputField('lastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('lastName', 'Aa');
        await expect(registrationForm.getErrorMessage('Last name has to be from 2 to 20 characters long')).not.toBeVisible();
        await registrationForm.fillInputField('lastName', 'Aaaaaaaaaaaaaaaaaaaaa');
        await expect(registrationForm.getErrorMessage('Last name has to be from 2 to 20 characters long')).toBeVisible();
        await expect(registrationForm.getInputField('lastName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('lastName', 'Aaaaaaaaaaaaaaaaaaaa');
        await expect(registrationForm.getErrorMessage('Last name has to be from 2 to 20 characters long')).not.toBeVisible();
        // await page.pause();
    });

        //--- Email field validation tests ---
    test('check the "Email required" error message is displayed when the Email field is empty', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillInputField('email', '');
        await expect(registrationForm.getErrorMessage('Email required')).toBeVisible();
        await expect(registrationForm.getInputField('email')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('email', `${registrationForm.generateUniqueEmail()}`);
        await expect(registrationForm.getErrorMessage('Email required')).not.toBeVisible();
        // await page.pause();
    });

    test('check the "Email is incorrect" error message is displayed when the Email field contains invalid characters or dismisses required parts', async ({ page }) => {
        await registrationForm.clickSignUpButton();

        await registrationForm.fillInputField('email', '@example.com');
        await expect(registrationForm.getErrorMessage('Email is incorrect')).toBeVisible();
        await expect(registrationForm.getInputField('email')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('email', 'alex@example.com');
        await expect(registrationForm.getErrorMessage('Email is incorrect')).not.toBeVisible();

        await registrationForm.fillInputField('email', 'alexexample.com');
        await expect(registrationForm.getErrorMessage('Email is incorrect')).toBeVisible();
        await expect(registrationForm.getInputField('email')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('email', 'alex@example.com');
        await expect(registrationForm.getErrorMessage('Email is incorrect')).not.toBeVisible();

        await registrationForm.fillInputField('email', 'alex@.com');
        await expect(registrationForm.getErrorMessage('Email is incorrect')).toBeVisible();
        await expect(registrationForm.getInputField('email')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('email', 'alex@example.com');
        await expect(registrationForm.getErrorMessage('Email is incorrect')).not.toBeVisible();

        await registrationForm.fillInputField('email', 'alex@example');
        await expect(registrationForm.getErrorMessage('Email is incorrect')).toBeVisible();
        await expect(registrationForm.getInputField('email')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('email', 'alex@example.com');
        await expect(registrationForm.getErrorMessage('Email is incorrect')).not.toBeVisible();

        await registrationForm.fillInputField('email', 'al ex@example.com');
        await expect(registrationForm.getErrorMessage('Email is incorrect')).toBeVisible();
        await expect(registrationForm.getInputField('email')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('email', 'alex@example.com');
        await expect(registrationForm.getErrorMessage('Email is incorrect')).not.toBeVisible();

        // await page.pause();
    });

    //--- Password field validation tests ---
    test('check the "Password required" error message is displayed when the Password field is empty', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillInputField('password', '');
        await expect(registrationForm.getErrorMessage('Password required')).toBeVisible();
        await expect(registrationForm.getInputField('password')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // await page.pause();
    });
    
    test('check the validation messages are displayed when the Password field gets wrong data', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        // Password is too short
        await registrationForm.fillInputField('password', 'Pass123');
        await expect(registrationForm.getErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
        await expect(registrationForm.getInputField('password')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // Password is too long
        await registrationForm.fillInputField('password', 'Password12345678');
        await expect(registrationForm.getErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
        await expect(registrationForm.getInputField('password')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // Password doesn't contain at least one capital letter
        await registrationForm.fillInputField('password', 'password123');
        await expect(registrationForm.getErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
        await expect(registrationForm.getInputField('password')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // // Password doesn't contain at least one integer PasswordABC
        await registrationForm.fillInputField('password', 'PasswordABC');
        await expect(registrationForm.getErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
        await expect(registrationForm.getInputField('password')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // // Password doesn't contain at least one small letter PASSWORD123
        await registrationForm.fillInputField('password', 'PASSWORD123');
        await expect(registrationForm.getErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
        await expect(registrationForm.getInputField('password')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // // Valid password Password123
        await registrationForm.fillInputField('password', 'Password123');
        await expect(registrationForm.getErrorMessage('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).not.toBeVisible();
        await expect(registrationForm.getInputField('password')).not.toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // await page.pause();
    });
    //--- Re-enter password field validation tests ---
    test('check the "Re-enter password required" error message is displayed when the Re-enter password field is empty', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillInputField('repeatPassword', '');
        await expect(registrationForm.getErrorMessage('Re-enter password required')).toBeVisible();
        await expect(registrationForm.getInputField('repeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        // await page.pause();
    });

    test('check the "Passwords do not match" error message is displayed when the Re-enter password field does not match the Password field', async ({ page }) => {
        await registrationForm.clickSignUpButton();
        await registrationForm.fillInputField('password', 'Password123');
        await registrationForm.fillInputField('repeatPassword', 'Password1234');
        await expect(registrationForm.getErrorMessage('Passwords do not match')).toBeVisible();
        await expect(registrationForm.getInputField('repeatPassword')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await registrationForm.fillInputField('repeatPassword', 'Password123');
        await expect(registrationForm.getErrorMessage('Passwords do not match')).not.toBeVisible();
        // await page.pause();
    });
});