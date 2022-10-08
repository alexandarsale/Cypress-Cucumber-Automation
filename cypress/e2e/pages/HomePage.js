class HomePage {

    elements = {
        emailInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#passwd'),
        loginBtn: () => cy.get('#SubmitLogin'),
        signInBtn: () => cy.get('.login'),
        successfullLoginMsg: () =>  cy.get('.info-account')
    }

    openPageURL(){
        cy.visit(Cypress.env('url'))
        cy.url().should('include', 'index.php')
    }

    typeEmail(email){
       this.elements.emailInput().type(email);
    }

    typePassword(password){
       this.elements.passwordInput().type(password);
    }

    clickSignIn(){
       this.elements.signInBtn().click();
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }

    clickLogOut(){
        cy.get('.logout').click()
    }

    enterProductInSearchBox(name){
        cy.get('#search_query_top').type(name)
    }

    clickSearchBtn(){
        cy.get('#searchbox > .btn').click()
    }

    clickListViewBtn(){
        cy.get('#list').click()
    }

}
module.exports = new HomePage()

