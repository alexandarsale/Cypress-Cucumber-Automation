Feature: Create new Account feature
  This feature deals with the create account functionality of the page

  Scenario: Create new Account
    Given User opens url page and checks if correct page is opened
    And User Clicks on SignIn
    Then User enters random email in create account text field
    Then User enters personal data information and verifies account is successfully created
    And User logs out