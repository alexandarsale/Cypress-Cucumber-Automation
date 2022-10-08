Feature: Login Feature

    This feature is used to check the login functionality of the page

    Scenario: Login with valid credentials
    Given User opens url page and checks if correct page is opened
    And User Clicks on SignIn
    And User enters email as "szafiroski@gmail.com" and Password as "01101995sale" and clicks login
    Then User checks if Login is successful
    