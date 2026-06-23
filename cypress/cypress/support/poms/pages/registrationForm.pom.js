export class RegistrationForm {
    selectors = {
        closeRegistrationFormButton: () => cy.get('.modal-header .close'),
        nameInput: () => cy.get('#signupName'),
        lastNameInput: () => cy.get('#signupLastName'),
        emailInput: () => cy.get('#signupEmail'),
        passwordInput: () => cy.get('#signupPassword'),
        repeatPasswordInput: () => cy.get('#signupRepeatPassword'),
        registerButton: () => cy.xpath('//button[contains(text(),"Register")]'),
    };

    closeRegistrationForm() {
        this.selectors.closeRegistrationFormButton().click();
    }

    fillNameInput(name) {
        this.selectors.nameInput().type(name);
    }

    fillLastNameInput(lastName) {
        this.selectors.lastNameInput().type(lastName);
    }

    fillEmailInput(email) {
        this.selectors.emailInput().type(email);
    }

    fillPasswordInput(password) {
        this.selectors.passwordInput().type(password);
    }

    fillRepeatPasswordInput(repeatPassword) {
        this.selectors.repeatPasswordInput().type(repeatPassword);
    }

    clickRegisterButton() {
        this.selectors.registerButton().click();
    }
}