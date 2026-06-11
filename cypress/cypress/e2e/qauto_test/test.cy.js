/// <reference types="cypress" />

describe('User authorization', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
    });

    it('Successful login with valid credentials', () => {
        cy.get('.header_signin').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('#signinEmail').type(Cypress.env('test_mail'));
        cy.get('#signinPassword').type(Cypress.env('test_password'));
        cy.get('.modal-footer .btn-primary').click();
        cy.get('#userNavDropdown').should('be.visible');
    });

    it('Autorization with invalid credentials', () => {
        cy.get('.header_signin').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('#signinEmail').type('invalid_email@example.com');
        cy.get('#signinPassword').type('invalid_password');
        cy.get('.modal-footer .btn-primary').click();
        cy.get('.alert-danger').should('be.visible');
    });

    it('Check the reset password functionality', () => {
        cy.get('.header_signin').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('.modal-body .btn-link').click();
        cy.get('.modal-content').should('be.visible');
        cy.get('#signinEmail').type(Cypress.env('test_mail'));
        cy.get('.modal-footer .btn-primary').click();
        cy.get('.alert-success').should('be.visible');
    });
});
