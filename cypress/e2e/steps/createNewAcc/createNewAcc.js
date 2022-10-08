import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
const AccFormInfoPage = require('../../pages/AccFormInfoPage')
const HomePage = require('../../pages/HomePage')

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

Then('User enters random email in create account text field', ()=> {
    function randomEmail() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }
        cy.newEmailAcc(randomEmail()+'@gmail.com')
})

Then('User enters personal data information and verifies account is successfully created', ()=>{
  
    cy.fillForm(testData.firstname,
        testData.lastname,
        testData.randompass,
        testData.address,
        testData.city,
        testData.zipcode,
        testData.phone)
})

And('User logs out', ()=> {
    HomePage.clickLogOut()
})
