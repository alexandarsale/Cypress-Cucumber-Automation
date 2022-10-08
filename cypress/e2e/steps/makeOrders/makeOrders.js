import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
const AccFormInfoPage = require('../../pages/AccFormInfoPage')
const HomePage = require('../../pages/HomePage')
const TShirtPage = require('../../pages/TShirtPage')

Given('User opens url page and checks if correct page is opened', () => {
    HomePage.openPageURL()
})

And('User Clicks on SignIn', () => {
    HomePage.clickSignIn()
})

And('User enters email as {string} and Password as {string} and clicks login', (email, password) => {
    HomePage.typeEmail(email)
    HomePage.typePassword(password)
    HomePage.clickLogin()
})

Then('User checks if Login is successful', () => {
    HomePage.elements.successfullLoginMsg().should('contain', 'Welcome to your account.')
})

When('User clicks on T-Shirt section', ()=> {
    TShirtPage.clickTshirtSection()
})

Then('User adds product to cart', ()=> {
    TShirtPage.addFirstProductToCart()
})

And('User verifies if product is added to cart', ()=> {
    TShirtPage.clickProceedToCheckOut()
    TShirtPage.verifyProductIsAddedToCart()
})

And('User finishes order', ()=> {
    TShirtPage.finishOrder()
})

Then('User verifies order is completed successfully',()=> {
    TShirtPage.verifyProductIsCompleted()
})

Then('User goes to checkout to increase quantity of product by {string} and finish order', (number)=> {
    cy.cucumberAddQuantity(number)
})

