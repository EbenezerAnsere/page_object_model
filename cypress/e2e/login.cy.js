/// <reference types='cypress' />

import loginPage from "../page-object-model/loginPage"
import homePage from "../page-object-model/homePage"

describe('Visit login page', ()=>{

    it('should login to the site', ()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        loginPage.login()
        // homePage.logoff()
        
        homePage.elements.logoffBtn().should('have.text', 'Logout').click()
    })

})