export class AddCarForm {
    selectorsIds = {
        addCarForm: '.modal-content',
        addCarBrand: '#addCarBrand',
        addCarModel: '#addCarModel',
        mileageInput: 'input[formcontrolname="mileage"]',
    };
    selectorsSuccessMessages = {
        addCarFormSuccessMessage: () => cy.contains('.alert-success', 'Car added'),
    };
    selectorsButtons = {
        addCarButton: () => cy.get('.modal-footer .btn-primary'),
        closeAddCarFormButton: () => cy.get('.modal-header .close'),
        cancelAddCarFormButton: () => cy.contains('button', 'Cancel'),
    };

    // universal get selectors methods
    getSelectorById(selectorId) {
        return cy.get(this.selectorsIds[selectorId]);
    }

    // fill Add car form methods (brand, model, mileage)
    fillAddCarForm(brand, model, mileage) {
        this.getSelectorById('addCarBrand').select(brand);
        this.getSelectorById('addCarModel').select(model);
        this.getSelectorById('mileageInput').type(mileage);
    }

    // verify Add car form fields are visible methods
    verifyAddCarFormFieldsAreVisible() {
        this.getSelectorById('addCarForm').should('be.visible');
        this.getSelectorById('addCarBrand').should('be.visible');
        this.getSelectorById('addCarModel').should('be.visible');
        this.getSelectorById('mileageInput').should('be.visible');
    }
    // verify Add car form buttons are visible methods
    verifyAddCarFormButtonsAreVisible() {
        this.selectorsButtons.addCarButton().should('be.visible');
        this.selectorsButtons.closeAddCarFormButton().should('be.visible');
        this.selectorsButtons.cancelAddCarFormButton().should('be.visible');
    }
    // click buttons methods
    clickAddCarButton() {
        this.selectorsButtons.addCarButton().click();
    }
    clickCloseAddCarFormButton() {
        this.selectorsButtons.closeAddCarFormButton().click();
    }
    clickCancelAddCarFormButton() {
        this.selectorsButtons.cancelAddCarFormButton().click();
    }
    // verify Add car form success message method
    verifyAddCarFormSuccessMessage() {
        this.selectorsSuccessMessages.addCarFormSuccessMessage().should('be.visible');
    }
}