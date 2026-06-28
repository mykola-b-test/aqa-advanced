export class AddCarExpenseForm {
    selectorsIds = {
        addCarExpenseForm: '.modal-content',
        addCarExpenseCar: '#addExpenseCar',
        addCarExpenseDate: '#addExpenseDate',
        addCarExpenseMileage: '#addExpenseMileage',
        addCarExpenseLiters: '#addExpenseLiters',
        addCarExpenseTotalCost: '#addExpenseTotalCost',
    };
    selectorsButtons = {
        addCarExpenseButton: () => cy.get('.modal-footer .btn-primary'),
        closeAddCarExpenseFormButton: () => cy.get('.modal-header .close'),
        cancelAddCarExpenseFormButton: () => cy.contains('button', 'Cancel'),
    };
    selectorsSuccessMessages = {
        addCarExpenseFormSuccessMessage: () => cy.contains('.alert-success', 'Fuel expense added'),
    };
    // universal get selectors methods
    getSelectorById(selectorId) {
        return cy.get(this.selectorsIds[selectorId]);
    }

    // fill Add and expense form methods (car, liters, totalCost)
    fillAddCarExpenseForm(car, liters, totalCost) {
        this.getSelectorById('addCarExpenseCar').select(car);
        this.getSelectorById('addCarExpenseLiters').type(liters);
        this.getSelectorById('addCarExpenseTotalCost').type(totalCost);
    }

    // fill Add and expense form methods (date)
    fillAddCarExpenseDate() {
        const todayDate = new Date().toLocaleDateString('uk-UA')
        this.getSelectorById('addCarExpenseDate').clear().type(todayDate);
    }

    // get new mileage value method
    getMileageValue() {
        return this.getSelectorById('addCarExpenseMileage').invoke('val').then((val) => {
            let newMileage;
            newMileage = Number(val) + 1000;
            return newMileage;
        });
    }
    // fill Add and expense form methods (mileage)
    fillAddCarExpenseMileage(newMileage) {
        this.getSelectorById('addCarExpenseMileage').clear().type(newMileage);
    }

    // verify Add and expense form success message method
    verifyAddCarExpenseFormSuccessMessage() {
        this.selectorsSuccessMessages.addCarExpenseFormSuccessMessage().should('be.visible');
    }

    // verify Add and expense form fields are visible method
    verifyAddCarExpenseFormFieldsAreVisible() {
        this.getSelectorById('addCarExpenseForm').should('be.visible');
        this.getSelectorById('addCarExpenseCar').should('be.visible');
        this.getSelectorById('addCarExpenseDate').should('be.visible');
        this.getSelectorById('addCarExpenseMileage').should('be.visible');
        this.getSelectorById('addCarExpenseLiters').should('be.visible');
        this.getSelectorById('addCarExpenseTotalCost').should('be.visible');
    }

    // verify Add and expense form buttons are visible method
    verifyAddCarExpenseFormButtonsAreVisible() {
        this.selectorsButtons.addCarExpenseButton().should('be.visible');
        this.selectorsButtons.closeAddCarExpenseFormButton().should('be.visible');
        this.selectorsButtons.cancelAddCarExpenseFormButton().should('be.visible');
    }

    // click Add and expense form button method
    clickAddCarExpenseButton() {
        this.selectorsButtons.addCarExpenseButton().click();
    }

    // click Close and expense form button method
    clickCloseAddCarExpenseFormButton() {
        this.selectorsButtons.closeAddCarExpenseFormButton().click();
    }

    // click Cancel and expense form button method
    clickCancelAddCarExpenseFormButton() {
        this.selectorsButtons.cancelAddCarExpenseFormButton().click();
    }
}