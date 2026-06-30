export class FuelExpensesPage {
    selectorsIds = {
        fuelExpensesPage: '[routerlink="expenses"]',
        carSelector: '#carSelectDropdown'
    };

    selectorExpenseRecord = {
        date: 'td:nth-child(1)',
        mileage: 'td:nth-child(2)',
        liters: 'td:nth-child(3)',
        totalCost: 'td:nth-child(4)',
    };
    // universal get selectors methods
    getSelectorById(selectorId) {
        return cy.get(this.selectorsIds[selectorId]);
    }
    getSelectorExpenseRecord(selector) {
        return cy.get(this.selectorExpenseRecord[selector]);
    }
    // verify fuel expenses page is visible methods
    verifyFuelExpensesPageIsVisible() {
        this.getSelectorById('fuelExpensesPage').should('be.visible');
    }

    // verify car selector is visible methods
    verifyCarSelectorIsVisible() {
        this.getSelectorById('carSelector').should('be.visible');
    }

    // open fuel expenses page method
    openFuelExpensesPage() {
        this.getSelectorById('fuelExpensesPage').click();
    }

    // verify expense record values 
    verifyExpenseRecordValues(date, mileage, liters, totalCost) {
        this.getSelectorExpenseRecord('date').should('contain', date);
        this.getSelectorExpenseRecord('mileage').should('contain', mileage);
        this.getSelectorExpenseRecord('liters').should('contain', liters);
        this.getSelectorExpenseRecord('totalCost').should('contain', totalCost);
    }
}