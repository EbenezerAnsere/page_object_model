class loginPage{

    elements = {
        username : () => cy.get('#username'),
        password : () => cy.get('#password'),
        submit : () => cy.get('#submit').then((elemet)=>{
            cy.wrap(elemet)
        })
    }

    login(){
        this.elements.username().type('student');
        this.elements.password().type('Password123')
        this.elements.submit().click()
    }

}

module.exports = new loginPage();