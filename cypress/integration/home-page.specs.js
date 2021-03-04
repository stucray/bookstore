/// <reference types="Cypress" />

beforeEach(() => cy.visit('/'))

describe('Test Home Page', () => {
    it('Visit Home Page', () => {
      //cy.visit('/');
      cy.getBySel('nav-logo-h1').contains('Books');
    });

    it('Menu Items', () => { 
        //cy.visit('/');
        cy.getBySel('nav-links').find('li')
            .its('length').should('be.eq', 2);
    })
});
  