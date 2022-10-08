class TShirtPage{

    elements = {
        hoverOverProduct: () => cy.get('div.product-container'),
        clickAddToCartBtn: () => cy.get('.ajax_add_to_cart_button')

    }

clickTshirtSection(){
    return cy.get('.sf-menu > :nth-child(3) > a').click().should('have.text', 'T-shirts')
}

addFirstProductToCart(){
   this.elements.hoverOverProduct().trigger('mouseover')
   this.elements.clickAddToCartBtn().click()
}

clickProceedToCheckOut(){
    return cy.get('a:contains(Proceed to checkout)').should('be.visible').click()
}

verifyProductIsAddedToCart(){
    return cy.get('#cart_title').should('contain.text', 'Shopping-cart summary')
}

finishOrder(){
    cy.finishOrder()
}

verifyProductIsCompleted(){
    return cy.get('.box').should('be.visible').contains('Your order on My Store is complete.')
}













}

module.exports = new TShirtPage()