export class GaragePage {
    selectorsButtons = {
        addNewCarButton: () => cy.contains('button', 'Add car'),
        addNewFuelExpenseFirstCarButton: () => cy.contains('button', 'Add fuel expense').first(),
        editFirstCarButton: () => cy.get('.car_actions .icon-edit').first(),
    };

    // verify buttons are visible methods
    verifyAddNewCarButtonIsVisible() {
        this.selectorsButtons.addNewCarButton().should('be.visible');
    }
    verifyAddNewFuelExpenseFirstCarButtonIsVisible() {
        this.selectorsButtons.addNewFuelExpenseFirstCarButton().should('be.visible');
    }
    verifyEditFirstCarButtonIsVisible() {
        this.selectorsButtons.editFirstCarButton().should('be.visible');
    }

    // click buttons methods
    clickAddNewCarButton() {
        this.selectorsButtons.addNewCarButton().click();
    }
    clickAddNewFuelExpenseButton() {
        this.selectorsButtons.addNewFuelExpenseFirstCarButton().click();
    }
    clickEditFirstCarButton() {
        this.selectorsButtons.editFirstCarButton().click();
    }
}