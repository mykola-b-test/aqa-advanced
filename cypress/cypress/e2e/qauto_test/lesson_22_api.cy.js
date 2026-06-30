import { LoginForm, AddCarForm, GaragePage, FuelExpensesPage } from '../../support/poms/pages';

const loginForm = new LoginForm();
const addCarForm = new AddCarForm();
const garagePage = new GaragePage();
const fuelExpensesPage = new FuelExpensesPage();

describe('API tests', () => {
    let addedCarId;
    let newCarData;
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
        cy.env(['test_user_credentials']).then(({ test_user_credentials }) => {
            cy.login(test_user_credentials.username, test_user_credentials.password);
        });
        loginForm.verifySuccessLoginFlow();
    });

    after(() => {
        cy.request('DELETE', `/api/cars/${addedCarId}`).then((response) => {
            expect(response.status).to.eq(200);
    });

    });

    // Car creation response intercept
    it('get the added car id via API intercept', () => {
        cy.intercept('POST', '/api/cars').as('addCarRequest');
        garagePage.clickAddNewCarButton();
        addCarForm.verifyAddCarFormFieldsAreVisible();
        addCarForm.verifyAddCarFormButtonsAreVisible()
        newCarData = {
            brand: {id: 5, name: 'Fiat'},
            model: {id: 23, name: 'Scudo'},
            mileage: 10000,
        }
        addCarForm.fillAddCarForm(newCarData.brand.name, newCarData.model.name, newCarData.mileage);
        addCarForm.clickAddCarButton();     
        addCarForm.verifyAddCarFormSuccessMessage();
        cy.wait('@addCarRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(201);
            addedCarId = interception.response.body.data.id;
        });
    })

    it('get the added car from the list of cars via API', () => {
    cy.request('GET', '/api/cars').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.length).to.be.greaterThan(0);
            expect(response.body.data[0].id).to.equal(addedCarId);
            expect(response.body.data[0].carBrandId).to.equal(newCarData.brand.id);
            expect(response.body.data[0].carModelId).to.equal(newCarData.model.id);
            expect(response.body.data[0].initialMileage).to.equal(newCarData.mileage);
            garagePage.verifyCarCardIsVisible(newCarData.brand.name, newCarData.model.name, newCarData.mileage);
        });
    });

    it('add a new fuel expense via API using specific command', () => {
        cy.addExpense(addedCarId, new Date().toISOString().split('T')[0], newCarData.mileage + 1000, 50, 999).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.carId).to.equal(addedCarId);
            expect(response.body.data.reportedAt).to.equal(new Date().toISOString().split('T')[0]);
            expect(response.body.data.mileage).to.equal(newCarData.mileage + 1000);
            expect(response.body.data.liters).to.equal(50);
            expect(response.body.data.totalCost).to.equal(999);
        });
    });

    it('verify via UI the added fuel expense in the list of fuel expenses', () => {
        fuelExpensesPage.openFuelExpensesPage();
        fuelExpensesPage.verifyFuelExpensesPageIsVisible();
        fuelExpensesPage.verifyCarSelectorIsVisible();
        fuelExpensesPage.verifyExpenseRecordValues(new Date().toLocaleDateString('uk-UA', { timeZone: 'UTC' }), newCarData.mileage + 1000, 50, 999);
    });
});