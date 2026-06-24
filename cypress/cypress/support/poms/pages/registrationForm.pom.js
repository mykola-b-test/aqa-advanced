export class RegistrationForm {

    modalSelectors = {
        registrationForm: () => cy.get('.modal-content'),
    };

    buttonsSelectors = {
        closeRegistrationFormButton: () => cy.get('.modal-header .close'),
        registerButton: () => cy.contains('button', 'Register'),
    };

    inputIds = {
        nameInput: '#signupName',
        lastNameInput: '#signupLastName',
        emailInput: '#signupEmail',
        passwordInput: '#signupPassword',
        repeatPasswordInput: '#signupRepeatPassword',
    };

    errorSelectors = {
        nameInput: '#signupName + .invalid-feedback',
        lastNameInput: '#signupLastName + .invalid-feedback',
        emailInput: '#signupEmail + .invalid-feedback',
        passwordInput: '#signupPassword + .invalid-feedback',
        repeatPasswordInput: '#signupRepeatPassword + .invalid-feedback',
    };

    //--- verify Registration form is visible methods
    verifyRegistrationFormIsVisible() {
        this.modalSelectors.registrationForm().should('be.visible');
    }

    //--- verify Registration form is not visible methods
    verifyRegistrationFormIsNotVisible() {
        cy.get('.modal-content').should('not.exist');
    }

    //--- get Input field methods
    getInputField(inputFieldName) {
        return cy.get(this.inputIds[inputFieldName]);
    }  

    //--- get Field error methods
    getFieldError(inputFieldName) {
        return cy.get(this.errorSelectors[inputFieldName]);
    }

    //--- verify Input field is visible methods
    verifyInputFieldIsVisible(inputFieldName) {
        this.getInputField(inputFieldName).should('be.visible');
    }

    //--- trigger Input field methods
    triggerInputField(inputFieldName) {
        this.getInputField(inputFieldName).focus().blur();
    }

    //--- verify Field border color methods
    verifyFieldBorderColor(inputFieldName, color) {
        this.getInputField(inputFieldName).should('have.css', 'border-color', color);
    }

    fillInputField(inputFieldName, value) {
        if (value === undefined || value === '') {
            this.getInputField(inputFieldName).clear().blur();
        } else {
            this.getInputField(inputFieldName).clear().type(value).blur();
        }
    }

    //--- Close Registration form methods
    closeRegistrationForm() {
        this.buttonsSelectors.closeRegistrationFormButton().click();
    }

    //--- verify Field error methods
    verifyFieldErrorMessageIsVisible(inputFieldName, errorMessage) {
        this.getFieldError(inputFieldName).contains(errorMessage).should('be.visible');
    }

    //--- verify Field error message is not visible methods
    verifyFieldErrorMessageIsNotVisible(inputFieldName) {
        this.getFieldError(inputFieldName).should('not.exist');
    }

    //--- click Register button methods
    clickRegisterButton() {
        this.buttonsSelectors.registerButton().click();
    }

    //--- verify Register button is disabled methods
    verifyRegisterButtonIsDisabled() {
        this.buttonsSelectors.registerButton().should('be.disabled');
    }

    //--- verify Register button is enabled methods
    verifyRegisterButtonIsEnabled() {
        this.buttonsSelectors.registerButton().should('not.be.disabled');
    }

    //--- verify success registration flow methods
    verifySuccessRegistrationFlow() {
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        cy.get('.alert.alert-success')
            .should('be.visible')
            .contains('Registration complete');
    }

}