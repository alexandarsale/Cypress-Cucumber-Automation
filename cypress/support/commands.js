// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('selectProduct', (productName) => {  
    cy.get('h4.card-title').each(($el, index, $link) => {

        if($el.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click()
        }
    
    })



})

Cypress.Commands.add('randomEmail', () => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      })


Cypress.Commands.add('login', (email, password) => {
    cy.url().should('include', 'index.php')
    cy.get('.login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin').click()
    cy.get('.info-account').should('contain', 'Welcome to your account.')
})



Cypress.Commands.add('newEmailAcc', (email) => {
    cy.url().should('include', 'index.php')
    cy.get('.login').click()
    cy.get('.page-subheading').contains('Create an account')
    cy.get('#email_create').type(email)
    cy.get('#SubmitCreate').click()

})

Cypress.Commands.add('fillForm', (firstName, lastName, password, address, city, zipcode, phone) => {
    cy.get('#customer_firstname').type(firstName)
    cy.get('#customer_lastname').type(lastName)
    cy.get('#passwd').type(password);
    cy.get('#newsletter').check().should('be.checked')
    cy.get('#optin').check().should('be.checked')
    cy.get('#days').select('1').should('have.value', '1')
    cy.get('#months').select('10').should('contain.text', 'October')
    cy.get('#years').select('1995').should('have.value', '1995')
    cy.get('#address1').type(address)
    cy.get('#city').type(city)
    cy.get('#id_state').select('32').should('contain.text', 'New York')
    cy.get('#postcode').type(zipcode)
    cy.get('#phone_mobile').type(phone)
    cy.get('#submitAccount').click()
    cy.get('.info-account').should('contain', 'Welcome to your account.')
    //cy.get('.logout').click()
})

Cypress.Commands.add('purchaseOrder', () => {
    cy.get('.sf-menu > :nth-child(3) > a').click().should('have.text', 'T-shirts')
    cy.get('div.product-container').trigger('mouseover')
    cy.get('.ajax_add_to_cart_button').click()
    cy.get('a:contains(Proceed to checkout)').should('be.visible').click()
    cy.get('#cart_title').should('contain.text', 'Shopping-cart summary')
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('#cgv').check().should('be.checked')
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('.bankwire').should('be.visible').contains('Pay by bank wire').click()
    cy.get('.box').should('be.visible').contains('You have chosen to pay by bank wire. Here is a short summary of your order')
    cy.get('#cart_navigation').should('be.visible').contains('I confirm my order').click()
    cy.get('.box').should('be.visible').contains('Your order on My Store is complete.')
})

Cypress.Commands.add('finishOrder', ()=> {
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('#cgv').check().should('be.checked')
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('.bankwire').should('be.visible').contains('Pay by bank wire').click()
    cy.get('.box').should('be.visible').contains('You have chosen to pay by bank wire. Here is a short summary of your order')
    cy.get('#cart_navigation').should('be.visible').contains('I confirm my order').click()
})

Cypress.Commands.add('addProductsToWishList', (productName) => {
    cy.get('h5[itemprop="name"]').each(($el, index, $list) =>{
     if($el.text().includes(productName)){
       cy.get('a.addToWishlist').eq(index).click()
       cy.get('.fancybox-item').should('be.visible').click()
     }
     })
})

Cypress.Commands.add('searchProduct', (productPrice) => {
    cy.get('div.right-block-content > div > span.price').each(($el, index, $list) => {
        if($el.text().includes(productPrice)){
          cy.get('a[title="Add to cart"]').eq(index).click()
          cy.get('a:contains(Proceed to checkout)').should('be.visible').click()
    cy.get('#cart_title').should('contain.text', 'Shopping-cart summary')
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('#cgv').check().should('be.checked')
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('.bankwire').should('be.visible').contains('Pay by bank wire').click()
    cy.get('.box').should('be.visible').contains('You have chosen to pay by bank wire. Here is a short summary of your order')
    cy.get('#cart_navigation').should('be.visible').contains('I confirm my order').click()
    cy.get('.box').should('be.visible').contains('Your order on My Store is complete.')
        }
    })
})

Cypress.Commands.add('addSpecialsToCart', (productName) => {
    cy.get('h5[itemprop="name"]').each(($el, index, $list) =>{
     if($el.text().includes(productName)){
       cy.get('a.button[title="Add to cart"]').eq(index).click()
       cy.get('span.continue').should('be.visible').click()
     }
     })
})

Cypress.Commands.add('increaseProductQuantity', (productName, number) => {
    cy.get('td.cart_description > p').each(($el, index, $list) =>{
     if($el.text().includes(productName)){
       cy.get('input.cart_quantity_input').eq(index).clear().type(number).should('have.value', number)
     }
     })
})

Cypress.Commands.add('shopingCartSummary', () => {
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('#cgv').check().should('be.checked')
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('.bankwire').should('be.visible').contains('Pay by bank wire').click()
    cy.get('.box').should('be.visible').contains('You have chosen to pay by bank wire. Here is a short summary of your order')
    cy.get('#cart_navigation').should('be.visible').contains('I confirm my order').click()
    cy.get('.box').should('be.visible').contains('Your order on My Store is complete.')
})

Cypress.Commands.add('openSpecials', () => {
    cy.get('.sf-menu > :nth-child(3) > a').click().should('have.text', 'T-shirts')
    cy.get('a:contains(All specials)').should('be.visible').click()
    cy.get('#list').should('be.visible').click()
})

Cypress.Commands.add('addQuantity', (number) => {
    cy.get('.sf-menu > :nth-child(3) > a').click().should('have.text', 'T-shirts')
          cy.get('div.product-container').trigger('mouseover')
          cy.get('.ajax_add_to_cart_button').click()
          cy.get('a:contains(Proceed to checkout)').should('be.visible').click()
          cy.get('#cart_title').should('contain.text', 'Shopping-cart summary')
          cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
          cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
          cy.get('#cgv').check().should('be.checked')
          cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
          cy.get('.first > a').should('be.visible').click()
          cy.get('.cart_quantity_input').clear().type(number)
          cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
          cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
          cy.get('#cgv').check().should('be.checked')
          cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
          cy.get('.bankwire').should('be.visible').contains('Pay by bank wire').click()
          cy.get('.box').should('be.visible').contains('You have chosen to pay by bank wire. Here is a short summary of your order')
          cy.get('#cart_navigation').should('be.visible').contains('I confirm my order').click()
          cy.get('.box').should('be.visible').contains('Your order on My Store is complete.')
       
})

Cypress.Commands.add('cucumberAddQuantity', (number) => {
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('#cgv').check().should('be.checked')
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('.first > a').should('be.visible').click()
    cy.get('.cart_quantity_input').clear().type(number)
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('#cgv').check().should('be.checked')
    cy.get('p.cart_navigation').should('be.visible').contains('Proceed to checkout').click()
    cy.get('.bankwire').should('be.visible').contains('Pay by bank wire').click()
    cy.get('.box').should('be.visible').contains('You have chosen to pay by bank wire. Here is a short summary of your order')
    cy.get('#cart_navigation').should('be.visible').contains('I confirm my order').click()
    cy.get('.box').should('be.visible').contains('Your order on My Store is complete.')
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
