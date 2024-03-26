/// <reference types='cypress' />

describe('template spec', () => {

    it('passes', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')

      cy.get('#menu-primary-items').as('menu')
      cy.get('@menu').find('li').should('have.length', 5)
      cy.get('@menu').find('li').eq(0).contains('Home').should('be.visible')
    })
  
  })