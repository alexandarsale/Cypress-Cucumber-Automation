import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
const HomePage = require('../../pages/HomePage')


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