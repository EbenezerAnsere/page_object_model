/// <reference types='cypress' />

describe('Login form', ()=>{
    it('should login to the application', ()=>{
        cy.visit('/practice-test-login/')
        cy.login('student', 'Password123')
    })
})