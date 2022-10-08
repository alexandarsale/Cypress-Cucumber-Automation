import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
const AccFormInfoPage = require('../../pages/AccFormInfoPage')
const HomePage = require('../../pages/HomePage')
const TShirtPage = require('../../pages/TShirtPage')

let testData;
before(() => {
    // root-level hook
    // runs once before all tests
    cy.fixture('example').then(function(data){
        testData=data
        return testData
    })
  })


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

When('User enters product name as {string} in search box', (name)=> {
        HomePage.enterProductInSearchBox(name)
})

Then('User clicks on Search button', ()=> {
    HomePage.clickSearchBtn()
})

And('User clicks on list view of all products', ()=> {
    HomePage.clickListViewBtn()
})

Then('User selects product between price range and makes the order', () => {
    cy.searchProduct(testData.priceRange)
})

Then('User verifies order is completed successfully',()=> {
    TShirtPage.verifyProductIsCompleted()
})