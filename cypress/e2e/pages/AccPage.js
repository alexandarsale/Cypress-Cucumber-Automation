class AccPage{

    getMyAccText(){
        return cy.get('.info-account').should('contain', 'Welcome to your account.')
    }

}

export default AccPage;