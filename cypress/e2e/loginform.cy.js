/// <reference types='cypress' />

describe('Login form', ()=>{
    
    it('should open the login form', ()=>{
        cy.visit(`${Cypress.env('baseUrl')}`)
    })

    it('should fill the login form', ()=>{
        //pending
    })
})

