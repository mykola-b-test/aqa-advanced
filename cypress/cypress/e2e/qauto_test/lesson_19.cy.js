describe('Getting Header and footer elements', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
    });

    it('Find header-left items', () => {
        cy.get('.header_logo').should('be.visible');
        cy.get('.header_nav').contains('Home').should('be.visible');
        cy.get('.header_nav').contains('About').should('be.visible');
        cy.get('.header_nav').contains('Contacts').should('be.visible');
    });
    it('Find header-right items', () => {
        cy.xpath('//button[contains(text(),"Guest log in")]').should(
            'be.visible',
        );
        cy.xpath('//button[contains(text(),"Sign In")]').should('be.visible');
    });
    it('Find footer socials networks links', () => {
        cy.get('.contacts_socials')
            .find('.socials_icon.icon.icon-facebook')
            .should('be.visible');
        cy.get('.contacts_socials')
            .find('.socials_icon.icon.icon-telegram')
            .should('be.visible');
        cy.get('.contacts_socials')
            .find('.socials_icon.icon.icon-youtube')
            .should('be.visible');
        cy.get('.contacts_socials')
            .find('.socials_icon.icon.icon-instagram')
            .should('be.visible');
        cy.get('.contacts_socials')
            .find('.socials_icon.icon.icon-linkedin')
            .should('be.visible');
    });
    it('Find footer contacts links', () => {
        cy.get('.contacts_link.display-4').should('be.visible');
        cy.get('.contacts_link.h4').should('be.visible');
    });
});
