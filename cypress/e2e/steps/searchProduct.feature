Feature: Search product by name
  This feature is used to search a specific product and purchase it

  Scenario: Search product and Add to Cart
    Given User opens url page and checks if correct page is opened
    And User Clicks on SignIn
    And User enters email as "szafiroski@gmail.com" and Password as "01101995sale" and clicks login
    Then User checks if Login is successful
    When User enters product name as "Dress" in search box
    Then User clicks on Search button
    And User clicks on list view of all products
    Then User selects product between price range and makes the order
    Then User verifies order is completed successfully
