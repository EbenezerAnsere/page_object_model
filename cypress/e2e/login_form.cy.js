/// <reference types='cypress' />

describe('Login site', ()=>{

    beforeEach(()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('should login to the application', ()=>{
        cy.loginform('student', 'Password123')
    })
})