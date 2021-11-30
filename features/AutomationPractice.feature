Feature: To palce order from Automation Practice Website
    Scenario: I signup and place,confirm a order
        Given I am on the home page of automation practice website
        When I click on sign in button
        Then  I must be navigated to my account page with header as "AUTHENTICATION"
        When I enter email address and click on create account
        Then I should see page header text as "CREATE AN ACCOUNT"
        When I enter title as Mrs,Firstname ,Lastname ,password,Date of Birth and check for Receive special offers from our partners!
       When I enter company and address,city,state,country and Postal code,mobile number,any alias address
        And I click on Register button
        Then I should see header text as "MY ACCOUNT"
        Then I should see the url contains my-account
        When I click on Women item and add dress to cart
        Then I should see product added message as "Product successfully added to your shopping cart"
        When I click on proceed to checkout
        Then I should see the shopping cart header as "SHOPPING-CART SUMMARY"
        When I click on proceed to checkout button
        Then I should see address header as "ADDRESSES"
        When I should click proceed to checkout
        Then I should be navigated to shipping page and see the header as "SHIPPING"
        When I check terms and conditions and click on proceed to checkout
        Then I should see paymet method header as "PLEASE CHOOSE YOUR PAYMENT METHOD"
        When I select payment option and confirm order
        Then I should see header as "ORDER CONFIRMATION"
