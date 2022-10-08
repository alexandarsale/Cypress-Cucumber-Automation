class NewAccFormInfo{


    getFirstName(){
        return cy.get('#customer_firstname');
    }

    getLastName(){
        return cy.get('#customer_lastname');
    }

    getPswd(){
        return cy.get('#passwd');
    }

    getNewsLetterCheckBox(){
        return cy.get('#newsletter').check().should('be.checked');
    }

    getSpecialOffersCheckBox(){
        return cy.get('#optin').check().should('be.checked');
    }

    getBirthDay(){
        return cy.get('#days').select('1').should('have.value', '1');
    }

    getBirthMonth(){
        return cy.get('#months').select('10').should('contain.text', 'October');
    }

    getBirthYear(){
        return cy.get('#years').select('1995').should('have.value', '1995');
    }

    getAddress(){
        return cy.get('#address1').type('randomadress')
    }

    getCity(){
        return cy.get('#city').type('New York')
    }

    getState(){
        return cy.get('#id_state').select('32').should('contain.text', 'New York')
    }

    getZipCode(){
        return cy.get('#postcode').type('18430')
    }

    getPhoneNumber(){
        return cy.get('#phone_mobile').type('125359677372')
    }

    getSubmitAcc(){
        return cy.get('#submitAccount').click()
    }

}

export default NewAccFormInfo;