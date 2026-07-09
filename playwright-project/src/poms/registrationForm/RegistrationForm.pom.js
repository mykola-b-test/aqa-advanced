import { BasePage } from '../BasePage.pom';

export class RegistrationForm extends BasePage {
    constructor(page) {
        super(page, '/');
    };

    inputFieldsIds = {
        name: 'signupName',
        lastName: 'signupLastName',
        email: 'signupEmail',
        password: 'signupPassword',
        repeatPassword: 'signupRepeatPassword',
    };

    buttonsIds = {
        signUp: 'Sign Up',
        close: 'Close',
        register: 'Register',
    };

    // universal getters
    getInputField(inputFieldId) {
        return this._page.locator(`#${this.inputFieldsIds[inputFieldId]}`);
    }
    getButton(buttonId) {
        return this._page.getByRole('button', { name: this.buttonsIds[buttonId] });
    }
    getModalContent() {
        return this._page.locator('.modal-content');
    }    
    getErrorMessage(errorMessage) {
        return this._page.locator('.invalid-feedback').getByText(errorMessage);
    }
    getSuccessMessage(successMessage) {
        return this._page.locator('.alert-success').getByText(successMessage);
    }

    // unique email generation
    generateUniqueEmail() {
        return `aqa-alex.brewneck+${Date.now()}@example.com`;
    }

    // Actions under the registration form
    async clickSignUpButton() {
        await this.getButton('signUp').click(); 
    }
    
    async clickCloseButton() {
        await this.getButton('close').click();
    }

    async clickRegisterButton() {
        await this.getButton('register').click();
    }

    async fillInputField(inputFieldId, value) {
        const inputField = this.getInputField(inputFieldId);
        await inputField.fill(value);
        await inputField.focus();
        await inputField.blur();
    }

    async fillRegisterFormValidData(name, lastName, password) {
        await this.fillInputField('name', name);
        await this.fillInputField('lastName', lastName);
        const uniqueEmail = this.generateUniqueEmail();
        await this.fillInputField('email', uniqueEmail);
        await this.fillInputField('password', password);
        await this.fillInputField('repeatPassword', password);
    }

    // get page URL
    getPageURL() {
        return this._page.url();
    }
    
}
