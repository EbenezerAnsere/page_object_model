class homePage{

    elements = {
       logoffBtn : () => cy.get('#.wp-block-button__link').then((ele)=>{
        cy.wrap(ele).click()
       })
    }

    logoff(){
        this.elements.logoffBtn();
       
    }

}

module.exports = new homePage()