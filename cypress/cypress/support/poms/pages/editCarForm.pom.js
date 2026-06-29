export class EditCarForm {
    selectorsIds = {
        editCarForm: '.modal-content',
        editCarBrand: '#addCarBrand',
        editCarModel: '#addCarModel',
        mileageInput: 'input[formcontrolname="mileage"]',
        createdAtInput: '#carCreationDate',
    };
    selectorsButtons = {
        saveEditCarFormButton: () => cy.contains('button', 'Save'),
        closeEditCarFormButton: () => cy.get('.modal-header .close'),
        cancelEditCarFormButton: () => cy.contains('button', 'Cancel'),
        removeCarButton: () => cy.contains('button', 'Remove car'),
        removeConfirmButton: () => cy.contains('button', 'Remove'),
        cancelRemoveCarButton: () => cy.contains('button', 'Cancel'),
    };
    selectorsSuccessMessages = {
        removeCarFormSuccessMessage: () => cy.contains('.alert-success', 'Car removed'),
    };

    // universal get selectors methods
    getSelectorById(selectorId) {
        return cy.get(this.selectorsIds[selectorId]);
    }

    // verify Edit car form fields are visible methods
    verifyEditCarFormFieldsAreVisible() {
        this.getSelectorById('editCarForm').should('be.visible');
        this.getSelectorById('editCarBrand').should('be.visible');
        this.getSelectorById('editCarModel').should('be.visible');
        this.getSelectorById('mileageInput').should('be.visible');
        this.getSelectorById('createdAtInput').should('be.visible');
    }

    // verify Edit car form buttons are visible methods
    verifyEditCarFormButtonsAreVisible() {
        this.selectorsButtons.saveEditCarFormButton().should('be.visible');
        this.selectorsButtons.closeEditCarFormButton().should('be.visible');
        this.selectorsButtons.cancelEditCarFormButton().should('be.visible');
    }

    // click buttons methods
    clickSaveEditCarFormButton() {
        this.selectorsButtons.saveEditCarFormButton().click();
    }
    clickCloseEditCarFormButton() {
        this.selectorsButtons.closeEditCarFormButton().click();
    }
    clickCancelEditCarFormButton() {
        this.selectorsButtons.cancelEditCarFormButton().click();
    }
    clickRemoveCarButton() {
        this.selectorsButtons.removeCarButton().click();
    }
    clickRemoveConfirmButton() {
        this.selectorsButtons.removeConfirmButton().click();
    }
    clickCancelRemoveCarButton() {
        this.selectorsButtons.cancelRemoveCarButton().click();
    }

    // verify Remove car form success message method
    verifyRemoveCarFormSuccessMessage() {
        this.selectorsSuccessMessages.removeCarFormSuccessMessage().should('be.visible');
    }
}