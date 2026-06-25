import { LoginPage, RegistrationForm, LoginForm } from '../../support/poms/pages';

const loginPage = new LoginPage();
const registrationForm = new RegistrationForm();
const loginForm = new LoginForm();


describe('Registration form validation tests', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/');
    });

    //--- General "open/close" form tests
    it('Open and close registration form by clicking on the "Sign Up" and "Close" buttons', () => {
        loginPage.clickSignUpButton();
        registrationForm.verifyRegistrationFormIsVisible();
        registrationForm.closeRegistrationForm();
        registrationForm.verifyRegistrationFormIsNotVisible();
    });

    //--- Field "Name"
    it('Check the Name "empty field" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.verifyInputFieldIsVisible('nameInput');
        registrationForm.triggerInputField('nameInput');
        registrationForm.verifyFieldErrorMessageIsVisible('nameInput', 'Name required');
        registrationForm.verifyFieldBorderColor('nameInput', 'rgb(220, 53, 69)');
        registrationForm.fillInputField('nameInput', 'John');
        registrationForm.verifyFieldErrorMessageIsNotVisible('nameInput');
    });

    it('Check the "Name is invalid" validation', () => {
        loginPage.clickSignUpButton();

        // special characters
        registrationForm.fillInputField('nameInput', '@@');
        registrationForm.verifyFieldErrorMessageIsVisible('nameInput', 'Name is invalid');
        registrationForm.verifyFieldBorderColor('nameInput', 'rgb(220, 53, 69)');

        // numbers
        registrationForm.fillInputField('nameInput', '123');
        registrationForm.verifyFieldErrorMessageIsVisible('nameInput', 'Name is invalid');
        registrationForm.verifyFieldBorderColor('nameInput', 'rgb(220, 53, 69)');

        // only spaces
        registrationForm.fillInputField('nameInput', ' ');
        registrationForm.verifyFieldErrorMessageIsVisible('nameInput', 'Name is invalid');
        registrationForm.verifyFieldBorderColor('nameInput', 'rgb(220, 53, 69)');

        // space at the beginning and end
        registrationForm.fillInputField('nameInput', ' John ');
        registrationForm.verifyFieldErrorMessageIsVisible('nameInput', 'Name is invalid');
        registrationForm.verifyFieldBorderColor('nameInput', 'rgb(220, 53, 69)');

        // valid name with space in the middle
        registrationForm.fillInputField('nameInput', 'Al ex');
        registrationForm.verifyFieldErrorMessageIsVisible('nameInput', 'Name is invalid');
        registrationForm.verifyFieldBorderColor('nameInput', 'rgb(220, 53, 69)');
    });

    it('Check the Name wrong length validation', () => {
        // less than 2 characters
        loginPage.clickSignUpButton();
        registrationForm.fillInputField('nameInput', 'a');
        registrationForm.verifyFieldErrorMessageIsVisible('nameInput', 'Name has to be from 2 to 20 characters long');
        registrationForm.verifyFieldBorderColor('nameInput', 'rgb(220, 53, 69)');
        // exactly 2 characters
        registrationForm.fillInputField('nameInput', 'a'.repeat(2));
        registrationForm.verifyFieldErrorMessageIsNotVisible('nameInput');

        // more than 20 characters
        registrationForm.fillInputField('nameInput', 'a'.repeat(21));
        registrationForm.verifyFieldErrorMessageIsVisible('nameInput', 'Name has to be from 2 to 20 characters long');
        registrationForm.verifyFieldBorderColor('nameInput', 'rgb(220, 53, 69)');

        // exactly 20 characters
        registrationForm.fillInputField('nameInput', 'a'.repeat(20));
        registrationForm.verifyFieldErrorMessageIsNotVisible('nameInput');
        // clear the Name field and close the modal for the next test
        registrationForm.fillInputField('nameInput', '');
        registrationForm.closeRegistrationForm();
    });

    //--- Field "Last Name"
    it('Check the Last Name "empty field" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.verifyInputFieldIsVisible('lastNameInput');
        registrationForm.triggerInputField('lastNameInput');
        registrationForm.verifyFieldErrorMessageIsVisible('lastNameInput', 'Last name required');
        registrationForm.verifyFieldBorderColor('lastNameInput', 'rgb(220, 53, 69)');
        registrationForm.fillInputField('lastNameInput', 'Alex');
        registrationForm.verifyFieldErrorMessageIsNotVisible('lastNameInput');
    });

    it('Check the "Last name is invalid" validation', () => {
        loginPage.clickSignUpButton();

        // special characters
        registrationForm.fillInputField('lastNameInput', '@@');
        registrationForm.verifyFieldErrorMessageIsVisible('lastNameInput', 'Last name is invalid');
        registrationForm.verifyFieldBorderColor('lastNameInput', 'rgb(220, 53, 69)');

        // numbers
        registrationForm.fillInputField('lastNameInput', '123');
        registrationForm.verifyFieldErrorMessageIsVisible('lastNameInput', 'Last name is invalid');
        registrationForm.verifyFieldBorderColor('lastNameInput', 'rgb(220, 53, 69)');

        // only spaces
        registrationForm.fillInputField('lastNameInput', ' ');
        registrationForm.verifyFieldErrorMessageIsVisible('lastNameInput', 'Last name is invalid');
        registrationForm.verifyFieldBorderColor('lastNameInput', 'rgb(220, 53, 69)');

        // space at the beginning and end
        registrationForm.fillInputField('lastNameInput', ' Brewneck ');
        registrationForm.verifyFieldErrorMessageIsVisible('lastNameInput', 'Last name is invalid');
        registrationForm.verifyFieldBorderColor('lastNameInput', 'rgb(220, 53, 69)');

        // valid last name with space in the middle
        registrationForm.fillInputField('lastNameInput', 'Brew neck');
        registrationForm.verifyFieldErrorMessageIsVisible('lastNameInput', 'Last name is invalid');
        registrationForm.verifyFieldBorderColor('lastNameInput', 'rgb(220, 53, 69)');
        registrationForm.closeRegistrationForm();
    });

    it('Check the Last name wrong length validation', () => {
        // less than 2 characters
        loginPage.clickSignUpButton();
        registrationForm.fillInputField('lastNameInput', 'A');
        registrationForm.verifyFieldErrorMessageIsVisible('lastNameInput', 'Last name has to be from 2 to 20 characters long');
        registrationForm.verifyFieldBorderColor('lastNameInput', 'rgb(220, 53, 69)');
        // exactly 2 characters
        registrationForm.fillInputField('lastNameInput', 'A'.repeat(2));
        registrationForm.verifyFieldErrorMessageIsNotVisible('lastNameInput');

        // more than 20 characters
        registrationForm.fillInputField('lastNameInput', 'A'.repeat(21));
        registrationForm.verifyFieldErrorMessageIsVisible('lastNameInput', 'Last name has to be from 2 to 20 characters long');
        registrationForm.verifyFieldBorderColor('lastNameInput', 'rgb(220, 53, 69)');
        // exactly 20 characters
        registrationForm.fillInputField('lastNameInput', 'AaZz'.repeat(5));
        registrationForm.verifyFieldErrorMessageIsNotVisible('lastNameInput');
        // clear the Name field and close the modal for the next test
        registrationForm.fillInputField('lastNameInput', '');
        registrationForm.closeRegistrationForm();
    });

    //--- Field "Email"

    it('Check the Email "empty field" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.verifyInputFieldIsVisible('emailInput');
        registrationForm.triggerInputField('emailInput');
        registrationForm.verifyFieldErrorMessageIsVisible('emailInput', 'Email required');
        registrationForm.verifyFieldBorderColor('emailInput', 'rgb(220, 53, 69)');
        registrationForm.fillInputField('emailInput', 'test@example.com');
        registrationForm.verifyFieldErrorMessageIsNotVisible('emailInput');
    });
    it('Check the "Email is incorrect" validation', () => {
        loginPage.clickSignUpButton();
        // email without @
        registrationForm.fillInputField('emailInput', 'invalid_emailgmail.com');
        registrationForm.verifyFieldErrorMessageIsVisible('emailInput', 'Email is incorrect');
        registrationForm.verifyFieldBorderColor('emailInput', 'rgb(220, 53, 69)');

        // email without domain part
        registrationForm.fillInputField('emailInput', '@gmail.com');
        registrationForm.verifyFieldErrorMessageIsVisible('emailInput', 'Email is incorrect');
        registrationForm.verifyFieldBorderColor('emailInput', 'rgb(220, 53, 69)');

        // email without provider part
        registrationForm.fillInputField('emailInput', 'invalid_email@');
        registrationForm.verifyFieldErrorMessageIsVisible('emailInput', 'Email is incorrect');
        registrationForm.verifyFieldBorderColor('emailInput', 'rgb(220, 53, 69)');

        // email with blank spaces
        registrationForm.fillInputField('emailInput', 'inva lidemail@gmail.com');
        registrationForm.verifyFieldErrorMessageIsVisible('emailInput', 'Email is incorrect');
        registrationForm.verifyFieldBorderColor('emailInput', 'rgb(220, 53, 69)');

        // valid email format "Aa-Zz, 0-9, special characters ._"
        registrationForm.fillInputField('emailInput', 'test1_Mail+007@example.com');
        registrationForm.verifyFieldErrorMessageIsNotVisible('emailInput');

        // clear the Name field and close the modal for the next test
        registrationForm.fillInputField('emailInput', '');
        registrationForm.closeRegistrationForm();
    });

    //--- Field "Password"

    it('Check the Password "empty field" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.verifyInputFieldIsVisible('passwordInput');
        registrationForm.triggerInputField('passwordInput');
        registrationForm.verifyFieldErrorMessageIsVisible('passwordInput', 'Password required');
        registrationForm.verifyFieldBorderColor('passwordInput', 'rgb(220, 53, 69)');
        registrationForm.fillInputField('passwordInput', 'Password123');
        registrationForm.verifyFieldErrorMessageIsNotVisible('passwordInput');
    });

    it('Check the password wrong data validation', () => {
        // password less than 8 characters (7 characters)
        loginPage.clickSignUpButton();
        registrationForm.fillInputField('passwordInput', 'Pass123');
        registrationForm.verifyFieldErrorMessageIsVisible('passwordInput', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        registrationForm.verifyFieldBorderColor('passwordInput', 'rgb(220, 53, 69)');

        // password exactly 8 characters with all required character types
        registrationForm.fillInputField('passwordInput', 'Pass1234');
        registrationForm.verifyFieldErrorMessageIsNotVisible('passwordInput');

        // pssword more than 15 characters (16 characters)
        registrationForm.fillInputField('passwordInput', 'Password12345678');
        registrationForm.verifyFieldErrorMessageIsVisible('passwordInput', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        registrationForm.verifyFieldBorderColor('passwordInput', 'rgb(220, 53, 69)');

        //password exactly 15 characters with all required character types
        registrationForm.fillInputField('passwordInput', 'Password1234567');
        registrationForm.verifyFieldErrorMessageIsNotVisible('passwordInput');

        // password with valid length but missing capital letter
        registrationForm.fillInputField('passwordInput', 'password123');
        registrationForm.verifyFieldErrorMessageIsVisible('passwordInput', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        registrationForm.verifyFieldBorderColor('passwordInput', 'rgb(220, 53, 69)');

        // password with valid length but missing small letter
        registrationForm.fillInputField('passwordInput', 'PASSWORD123');
        registrationForm.verifyFieldErrorMessageIsVisible('passwordInput', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        registrationForm.verifyFieldBorderColor('passwordInput', 'rgb(220, 53, 69)');

        // password with valid length but missing number
        registrationForm.fillInputField('passwordInput', 'Password');
        registrationForm.verifyFieldErrorMessageIsVisible('passwordInput', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
        registrationForm.verifyFieldBorderColor('passwordInput', 'rgb(220, 53, 69)');

        // clear the Password field and close the modal after the test
        registrationForm.fillInputField('passwordInput', '');
        registrationForm.closeRegistrationForm();
    });

    //--- Field "Re-enter password"

    it('Check the Re-enter password "empty field" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.verifyInputFieldIsVisible('repeatPasswordInput');
        registrationForm.triggerInputField('repeatPasswordInput');
        registrationForm.verifyFieldErrorMessageIsVisible('repeatPasswordInput', 'Re-enter password required');
        registrationForm.verifyFieldBorderColor('repeatPasswordInput', 'rgb(220, 53, 69)');
    });

    it('Check the "Passwords do not match" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.fillInputField('passwordInput', 'Password123');
        registrationForm.fillInputField('repeatPasswordInput', 'Password321');
        registrationForm.verifyFieldErrorMessageIsVisible('repeatPasswordInput', 'Passwords do not match');
        registrationForm.verifyFieldBorderColor('repeatPasswordInput', 'rgb(220, 53, 69)');
        // re-enter the correct password to remove the validation error
        registrationForm.fillInputField('repeatPasswordInput', 'Password123');
        registrationForm.verifyFieldErrorMessageIsNotVisible('repeatPasswordInput');

        // clear the "password" and "Re-enter password" fields and close the modal after the test
        registrationForm.fillInputField('passwordInput', '');
        registrationForm.fillInputField('repeatPasswordInput', '');
        registrationForm.closeRegistrationForm();
    });

    //--- "Register" button enabled/disabled state tests
    it('Check the Register button is disabled when the form is empty', () => {
        loginPage.clickSignUpButton();
        registrationForm.verifyRegistrationFormIsVisible();
        registrationForm.verifyRegisterButtonIsDisabled();
    });

    it('Check the Register button is disabled when all fields are invalid and filled', () => {
        loginPage.clickSignUpButton();
        registrationForm.fillInputField('nameInput', 'A');
        registrationForm.fillInputField('lastNameInput', 'B');
        registrationForm.fillInputField('emailInput', 'invalid_email');
        registrationForm.fillInputField('passwordInput', 'pass');
        registrationForm.fillInputField('repeatPasswordInput', 'word');
        registrationForm.verifyRegisterButtonIsDisabled();
    });

    it('Check the Register button is enabled when all fields are valid', () => {
        loginPage.clickSignUpButton();
        registrationForm.fillInputField('nameInput', 'Alex');
        registrationForm.fillInputField('lastNameInput', 'Brewneck');
        const uniqueEmail = `alex.brewneck+${Date.now()}@example.com`;
        registrationForm.fillInputField('emailInput', uniqueEmail);
        registrationForm.fillInputField('passwordInput', 'Password123');
        registrationForm.fillInputField('repeatPasswordInput', 'Password123');
        registrationForm.verifyRegisterButtonIsEnabled();
        registrationForm.clickRegisterButton();
        registrationForm.verifySuccessRegistrationFlow();
    });

    //--- Login test using custom command "login"
    it('Login test via command', () => {
        cy.env(['testUserCredentials_1']).then(({ testUserCredentials_1 }) => {
            cy.login(
                testUserCredentials_1.username,
                testUserCredentials_1.password,
            );
        });
        loginForm.verifySuccessLoginFlow();
    });
});
