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
        cy.get('.modal-content').should('be.visible');
        registrationForm.closeRegistrationForm();
        cy.get('.modal-content').should('not.exist');
    });

    //--- Field "Name"
    it('Check the Name "empty field" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.selectors.nameInput().should('be.visible');
        registrationForm.selectors.nameInput().focus().blur();
        cy.get('#signupName + .invalid-feedback')
            .contains('Name required')
            .should('be.visible');
        registrationForm.selectors.nameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
        registrationForm.fillNameInput('John');
        cy.get('#signupName + .invalid-feedback').should('not.exist');
    });

    it('Check the "Name is invalid" validation', () => {
        loginPage.clickSignUpButton();

        // special characters
        registrationForm.selectors.nameInput().clear().type('@@').blur();
        cy.get('#signupName + .invalid-feedback')
            .contains('Name is invalid')
            .should('be.visible');
        registrationForm.selectors.nameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // numbers
        registrationForm.selectors.nameInput().clear().type('123').blur();
        cy.get('#signupName + .invalid-feedback')
            .contains('Name is invalid')
            .should('be.visible');
        registrationForm.selectors.nameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // only spaces
        registrationForm.selectors.nameInput().clear().type(' ').blur();
        cy.get('#signupName + .invalid-feedback')
            .contains('Name is invalid')
            .should('be.visible');
        registrationForm.selectors.nameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // space at the beginning and end
        registrationForm.selectors.nameInput().clear().type(' John ').blur();
        cy.get('#signupName + .invalid-feedback')
            .contains('Name is invalid')
            .should('be.visible');
        registrationForm.selectors.nameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // valid name with space in the middle
        registrationForm.selectors.nameInput().clear().type('Al ex').blur();
        cy.get('#signupName + .invalid-feedback')
            .contains('Name is invalid')
            .should('be.visible');
        registrationForm.selectors.nameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
    });

    it('Check the Name wrong length validation', () => {
        // less than 2 characters
        loginPage.clickSignUpButton();
        registrationForm.selectors.nameInput().type('a').blur();
        cy.get('#signupName + .invalid-feedback')
            .contains('Name has to be from 2 to 20 characters long')
            .should('be.visible');
        registrationForm.selectors.nameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
        // exactly 2 characters
        registrationForm.selectors.nameInput().clear().type('a'.repeat(2)).blur();
        cy.get('#signupName + .invalid-feedback').should('not.exist');

        // more than 20 characters
        registrationForm.selectors.nameInput().clear().type('a'.repeat(21)).blur();
        cy.get('#signupName + .invalid-feedback')
            .contains('Name has to be from 2 to 20 characters long')
            .should('be.visible');
        registrationForm.selectors.nameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // exactly 20 characters
        registrationForm.selectors.nameInput().clear().type('a'.repeat(20)).blur();
        cy.get('#signupName + .invalid-feedback').should('not.exist');
        // clear the Name field and close the modal for the next test
        registrationForm.selectors.nameInput().clear();
        registrationForm.closeRegistrationForm();
    });

    //--- Field "Last Name"
    it('Check the Last Name "empty field" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.selectors.lastNameInput().should('be.visible');
        registrationForm.selectors.lastNameInput().focus().blur();
        cy.get('#signupLastName + .invalid-feedback')
            .contains('Last name required')
            .should('be.visible');
        registrationForm.selectors.lastNameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
        registrationForm.selectors.lastNameInput().type('Alex').blur();
        cy.get('#signupLastName + .invalid-feedback').should('not.exist');
    });

    it('Check the "Last name is invalid" validation', () => {
        loginPage.clickSignUpButton();

        // special characters
        registrationForm.selectors.lastNameInput().clear().type('@@').blur();
        cy.get('#signupLastName + .invalid-feedback')
            .contains('Last name is invalid')
            .should('be.visible');
        registrationForm.selectors.lastNameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // numbers
        registrationForm.selectors.lastNameInput().clear().type('123').blur();
        cy.get('#signupLastName + .invalid-feedback')
            .contains('Last name is invalid')
            .should('be.visible');
        registrationForm.selectors.lastNameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // only spaces
        registrationForm.selectors.lastNameInput().clear().type(' ').blur();
        cy.get('#signupLastName + .invalid-feedback')
            .contains('Last name is invalid')
            .should('be.visible');
        registrationForm.selectors.lastNameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // space at the beginning and end
        registrationForm.selectors.lastNameInput().clear().type(' Brewneck ').blur();
        cy.get('#signupLastName + .invalid-feedback')
            .contains('Last name is invalid')
            .should('be.visible');
        registrationForm.selectors.lastNameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // valid last name with space in the middle
        registrationForm.selectors.lastNameInput().clear().type('Brew neck').blur();
        cy.get('#signupLastName + .invalid-feedback')
            .contains('Last name is invalid')
            .should('be.visible');
        registrationForm.selectors.lastNameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
        registrationForm.closeRegistrationForm();
    });

    it('Check the Last name wrong length validation', () => {
        // less than 2 characters
        loginPage.clickSignUpButton();
        registrationForm.selectors.lastNameInput().type('A').blur();
        cy.get('#signupLastName + .invalid-feedback')
            .contains('Last name has to be from 2 to 20 characters long')
            .should('be.visible');
        registrationForm.selectors.lastNameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
        // exactly 2 characters
        registrationForm.selectors.lastNameInput().clear().type('A'.repeat(2)).blur();
        cy.get('#signupLastName + .invalid-feedback').should('not.exist');

        // more than 20 characters
        registrationForm.selectors.lastNameInput().clear().type('A'.repeat(21)).blur();
        cy.get('#signupLastName + .invalid-feedback')
            .contains('Last name has to be from 2 to 20 characters long')
            .should('be.visible');
        registrationForm.selectors.lastNameInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
        // exactly 20 characters
        registrationForm.selectors.lastNameInput().clear().type('AaZz'.repeat(5)).blur();
        cy.get('#signupLastName + .invalid-feedback').should('not.exist');
        // clear the Name field and close the modal for the next test
        registrationForm.selectors.lastNameInput().clear();
        registrationForm.closeRegistrationForm();
    });

    //--- Field "Email"

    it('Check the Email "empty field" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.selectors.emailInput().should('be.visible');
        registrationForm.selectors.emailInput().focus().blur();
        cy.get('#signupEmail + .invalid-feedback')
            .contains('Email required')
            .should('be.visible');
        registrationForm.selectors.emailInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
        registrationForm.selectors.emailInput().type('test@example.com').blur();
        cy.get('#signupEmail + .invalid-feedback').should('not.exist');
    });
    it('Check the "Email is incorrect" validation', () => {
        loginPage.clickSignUpButton();
        // email without @
        registrationForm.selectors.emailInput().clear().type('invalid_emailgmail.com').blur();
        cy.get('#signupEmail + .invalid-feedback')
            .contains('Email is incorrect')
            .should('be.visible');
        registrationForm.selectors.emailInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // email without domain part
        registrationForm.selectors.emailInput().clear().type('@gmail.com').blur();
        cy.get('#signupEmail + .invalid-feedback')
            .contains('Email is incorrect')
            .should('be.visible');
        registrationForm.selectors.emailInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // email without provider part
        registrationForm.selectors.emailInput().clear().type('invalid_email@').blur();
        cy.get('#signupEmail + .invalid-feedback')
            .contains('Email is incorrect')
            .should('be.visible');
        registrationForm.selectors.emailInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // email with blank spaces
        registrationForm.selectors.emailInput().clear().type('inva lidemail@gmail.com').blur();
        cy.get('#signupEmail + .invalid-feedback')
            .contains('Email is incorrect')
            .should('be.visible');
        registrationForm.selectors.emailInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // valid email format "Aa-Zz, 0-9, special characters ._"
        registrationForm.selectors.emailInput()
            .clear()
            .type('test1_Mail+007@example.com')
            .blur();
        cy.get('#signupEmail + .invalid-feedback').should('not.exist');

        // clear the Name field and close the modal for the next test
        registrationForm.selectors.emailInput().clear();
        registrationForm.closeRegistrationForm();
    });

    //--- Field "Password"

    it('Check the Password "empty field" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.selectors.passwordInput().should('be.visible');
        registrationForm.selectors.passwordInput().focus().blur();
        cy.get('#signupPassword + .invalid-feedback')
            .contains('Password required')
            .should('be.visible');
        registrationForm.selectors.passwordInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
        registrationForm.selectors.passwordInput().type('Password123').blur();
        cy.get('#signupPassword + .invalid-feedback').should('not.exist');
    });

    it('Check the password wrong data validation', () => {
        // password less than 8 characters (7 characters)
        loginPage.clickSignUpButton();
        registrationForm.selectors.passwordInput().type('Pass123').blur();
        cy.get('#signupPassword + .invalid-feedback')
            .contains(
                'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
            )
            .should('be.visible');
        registrationForm.selectors.passwordInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // password exactly 8 characters with all required character types
        registrationForm.selectors.passwordInput().clear().type('Pass1234').blur();
        cy.get('#signupPassword + .invalid-feedback').should('not.exist');

        // pssword more than 15 characters (16 characters)
        registrationForm.selectors.passwordInput().clear().type('Password12345678').blur();
        cy.get('#signupPassword + .invalid-feedback')
            .contains(
                'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
            )
            .should('be.visible');
        registrationForm.selectors.passwordInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        //password exactly 15 characters with all required character types
        registrationForm.selectors.passwordInput().clear().type('Password1234567').blur();
        cy.get('#signupPassword + .invalid-feedback').should('not.exist');

        // password with valid length but missing capital letter
        registrationForm.selectors.passwordInput().clear().type('password123').blur();
        cy.get('#signupPassword + .invalid-feedback')
            .contains(
                'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
            )
            .should('be.visible');
        registrationForm.selectors.passwordInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // password with valid length but missing small letter
        registrationForm.selectors.passwordInput().clear().type('PASSWORD123').blur();
        cy.get('#signupPassword + .invalid-feedback')
            .contains(
                'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
            )
            .should('be.visible');
        registrationForm.selectors.passwordInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // password with valid length but missing number
        registrationForm.selectors.passwordInput().clear().type('Password').blur();
        cy.get('#signupPassword + .invalid-feedback')
            .contains(
                'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
            )
            .should('be.visible');
        registrationForm.selectors.passwordInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );

        // clear the Password field and close the modal after the test
        registrationForm.selectors.passwordInput().clear();
        registrationForm.closeRegistrationForm();
    });

    //--- Field "Re-enter password"

    it('Check the Re-enter password "empty field" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.selectors.repeatPasswordInput().should('be.visible');
        registrationForm.selectors.repeatPasswordInput().focus().blur();
        cy.get('#signupRepeatPassword + .invalid-feedback')
            .contains('Re-enter password required')
            .should('be.visible');
        registrationForm.selectors.repeatPasswordInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
    });

    it('Check the "Passwords do not match" validation', () => {
        loginPage.clickSignUpButton();
        registrationForm.selectors.passwordInput().type('Password123').blur();
        registrationForm.selectors.repeatPasswordInput().type('Password321').blur();
        cy.get('#signupRepeatPassword + .invalid-feedback')
            .contains('Passwords do not match')
            .should('be.visible');
        registrationForm.selectors.repeatPasswordInput().should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
        // re-enter the correct password to remove the validation error
        registrationForm.selectors.repeatPasswordInput().clear().type('Password123').blur();
        cy.get('#signupRepeatPassword + .invalid-feedback').should('not.exist');

        // clear the "password" and "Re-enter password" fields and close the modal after the test
        registrationForm.selectors.passwordInput().clear();
        registrationForm.selectors.repeatPasswordInput().clear();
        registrationForm.closeRegistrationForm();
    });

    //--- "Register" button enabled/disabled state tests
    it('Check the Register button is disabled when the form is empty', () => {
        loginPage.clickSignUpButton();
        cy.get('.modal-content').should('be.visible');
        registrationForm.selectors.registerButton().should('be.disabled');
    });

    it('Check the Register button is disabled when all fields are invalid and filled', () => {
        loginPage.clickSignUpButton();
        registrationForm.selectors.nameInput().type('A').blur();
        registrationForm.selectors.lastNameInput().type('B').blur();
        registrationForm.selectors.emailInput().type('invalid_email').blur();
        registrationForm.selectors.passwordInput().type('pass').blur();
        registrationForm.selectors.repeatPasswordInput().type('word').blur();
        registrationForm.selectors.registerButton().should('be.disabled');
    });

    it('Check the Register button is enabled when all fields are valid', () => {
        loginPage.clickSignUpButton();
        registrationForm.selectors.nameInput().type('Alex').blur();
        registrationForm.selectors.lastNameInput().type('Brewneck').blur();
        const uniqueEmail = `alex.brewneck+${Date.now()}@example.com`;
        registrationForm.selectors.emailInput().type(uniqueEmail).blur();
        registrationForm.selectors.passwordInput().type('Password123').blur();
        registrationForm.selectors.repeatPasswordInput().type('Password123').blur();
        registrationForm.selectors.registerButton().should('not.be.disabled');
        registrationForm.clickRegisterButton();
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        cy.get('.alert.alert-success')
            .should('be.visible')
            .contains('Registration complete');
    });

    //--- Login test using custom command "login"
    it('Login test via command', () => {
        cy.env(['testUserCredentials_1']).then(({ testUserCredentials_1 }) => {
            cy.login(
                testUserCredentials_1.username,
                testUserCredentials_1.password,
            );
        });
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        cy.get('.alert.alert-success')
            .should('be.visible')
            .contains('You have been successfully logged in');
    });
});
