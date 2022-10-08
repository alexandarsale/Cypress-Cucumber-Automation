Feature: Ordering products successfully
  This feature deals with ordering products functionality of the page

  Background: User is logged In
    Given User opens url page and checks if correct page is opened
    And User Clicks on SignIn
    And User enters email as "szafiroski@gmail.com" and Password as "01101995sale" and clicks login
    Then User checks if Login is successful


  Scenario: Make an Order
    When User clicks on T-Shirt section
    Then User adds product to cart
    And User verifies if product is added to cart
    And User finishes order
    Then User verifies order is completed successfully

  Scenario: Make Order with increased Quantity
    When User clicks on T-Shirt section
    Then User adds product to cart
    And User verifies if product is added to cart
    Then User goes to checkout to increase quantity of product by "2" and finish order
    Then User verifies order is completed successfully
  