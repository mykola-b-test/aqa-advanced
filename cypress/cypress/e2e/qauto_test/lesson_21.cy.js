import { LoginForm, AddCarForm, AddCarExpenseForm, EditCarForm , GaragePage } from '../../support/poms/pages';

const loginForm = new LoginForm();
const addCarForm = new AddCarForm();
const addCarExpenseForm = new AddCarExpenseForm();
const editCarForm = new EditCarForm();
const garagePage = new GaragePage();

describe('Add new car and its fuel expenses tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
        cy.env(['test_user_credentials']).then(({ test_user_credentials }) => {
            cy.login(test_user_credentials.username, test_user_credentials.password);
        });
        loginForm.verifySuccessLoginFlow();
    });

    it('check the ability to add a new car', () => {
        garagePage.clickAddNewCarButton();
        addCarForm.verifyAddCarFormFieldsAreVisible();
        addCarForm.verifyAddCarFormButtonsAreVisible()
        addCarForm.fillAddCarForm('Fiat', 'Scudo', '10000');
        addCarForm.clickAddCarButton();     
        addCarForm.verifyAddCarFormSuccessMessage();
    });

    it('check the ability to add a new fuel expense', () => {
        garagePage.clickAddNewFuelExpenseButton();
        addCarExpenseForm.verifyAddCarExpenseFormFieldsAreVisible();
        addCarExpenseForm.verifyAddCarExpenseFormButtonsAreVisible();
        addCarExpenseForm.fillAddCarExpenseForm('Fiat Scudo', '50', '999');
        addCarExpenseForm.fillAddCarExpenseDate();
        addCarExpenseForm.getMileageValue().then((newMileage) => {
            addCarExpenseForm.fillAddCarExpenseMileage(newMileage)
            });
        addCarExpenseForm.clickAddCarExpenseButton();
        addCarExpenseForm.verifyAddCarExpenseFormSuccessMessage();
    });

    it('Check the abilit to delete a car', () => {
        garagePage.clickEditFirstCarButton();
        editCarForm.verifyEditCarFormFieldsAreVisible();
        editCarForm.verifyEditCarFormButtonsAreVisible();
        editCarForm.clickRemoveCarButton();
        editCarForm.clickRemoveConfirmButton();
        editCarForm.verifyRemoveCarFormSuccessMessage();
    });
});