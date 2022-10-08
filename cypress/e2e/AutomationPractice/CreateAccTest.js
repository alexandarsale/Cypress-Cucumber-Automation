/// <reference types="Cypress" />

describe('AutomationPractice Test', () => {
    let testData;
    before(() => {
      cy.visit(Cypress.env('url'))
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data){
            testData=data
            return testData
        })
      })

      

      it('should create new account', () => {

        function randomEmail() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      
          for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
      
          return text;
        }
          cy.newEmailAcc(randomEmail()+'@gmail.com')
          
          cy.fillForm(testData.firstname,
            testData.lastname,
            testData.randompass,
            testData.address,
            testData.city,
            testData.zipcode,
            testData.phone)
      })


     it('should login with valid creds', () => {

        cy.login(testData.email, testData.password)
        
        }) 

        it('should add item to cart and purchase it', () => {
          cy.reload()
            cy.login(testData.email, testData.password)
            cy.purchaseOrder()

            }) 

       it('should add products to wishlist', () => {
         cy.reload()
         cy.login(testData.email, testData.password)
         cy.openSpecials()
         testData.productName.forEach(function(element){
          cy.addProductsToWishList(element)
         })
         cy.get('.account').should('be.visible').click()
         cy.get('.lnk_wishlist > a ').should('contain.text', 'My wishlists').click()
         cy.get('[style="width:200px;"] > a').should('contain.text', 'wishlist').click()
         cy.get('.wlp_bought_list').should('contain.text', 'Printed Chiffon Dress').and('contain.text', 'Printed Summer Dress')
         
      
        }) 

        it('should increase quantity of products in order page', () => {
          cy.reload()
          cy.login(testData.email, testData.password)
          cy.addQuantity(2)
       
         }) 

         it('should add all specials to cart and increase quantity by 3', () => {
          cy.reload()
          cy.login(testData.email, testData.password)
          cy.openSpecials()
          testData.productName.forEach(function (element) {
            cy.addSpecialsToCart(element);
          });
          cy.get('a[title="View my shopping cart"]').should('be.visible').click()
          testData.productName.forEach(function(element){
            cy.increaseProductQuantity(element, 3)
        })
        cy.shopingCartSummary()
          
         }) 

         it.only('should search a product and purchase it', () => {
          cy.reload()
          cy.login(testData.email, testData.password)
          cy.get('#search_query_top').type("Dress")
          cy.get('#searchbox > .btn').click()
          cy.get('#list').click()
          cy.searchProduct('27')
         
         })
    })