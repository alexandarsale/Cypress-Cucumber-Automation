class CreateAccPage {

    getCreateEmailBtn(){
        return cy.get('#email_create')
    }

    getSubmitCreateAccBtn(){
        return cy.get('#SubmitCreate')
    }

    getCreateAccText(){
        return cy.get('.page-subheading').contains('Create an account')
    }

}

export default CreateAccPage;