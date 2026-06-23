export class LoginForm {
    selectors = {
        closeLoginFormButton: () => cy.get('.modal-header .close'),
        emailInput: () => cy.get('#signinEmail'),
        passwordInput: () => cy.get('#signinPassword'),
        rememberMeCheckbox: () => cy.get('#remember'),
        forgotPasswordLink: () => cy.xpath('//button[contains(text(),"Forgot password")]'),
        registrationLink: () => cy.xpath('//button[contains(text(),"Registration")]'),
        loginButton: () => cy.xpath('//button[contains(text(),"Login")]'),
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
}