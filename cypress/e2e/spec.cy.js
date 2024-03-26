/// <reference types='cypress' />

describe('template spec', () => {

  it('passes', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')

     cy.get('#username').type('student')
     cy.get('#password').type('Password123')

     cy.get('#submit').then(($element)=>{

      cy.wrap($element).click()

     })

     cy.get('.wp-block-button__link').click()

  })

})