export class LoginForm {
    selectors = {
        closeLoginFormButton: () => cy.get('.modal-header .close'),
        emailInput: () => cy.get('#signinEmail'),
        passwordInput: () => cy.get('#signinPassword'),
        rememberMeCheckbox: () => cy.get('#remember'),
        forgotPasswordLink: () => cy.contains('button', 'Forgot password'),
        registrationLink: () => cy.contains('button', 'Registration'),
        loginButton: () => cy.contains('button', 'Login'),
    };

    closeLoginForm() {
        this.selectors.closeLoginFormButton().click();
    }

    fillEmailInput(email) {
        this.selectors.emailInput().type(email);
    }

    fillPasswordInput(password) {
        this.selectors.passwordInput().type(password);
    }

    clickRememberMeCheckbox() {
        this.selectors.rememberMeCheckbox().click();
    }

    clickForgotPasswordLink() {
        this.selectors.forgotPasswordLink().click();
    }

    clickRegistrationLink() {
        this.selectors.registrationLink().click();
    }

    clickLoginButton() {
        this.selectors.loginButton().click();
    }

    //--- verify success login flow methods
    verifySuccessLoginFlow() {
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        cy.get('.alert.alert-success')
            .should('be.visible')
            .contains('You have been successfully logged in');
    }
}