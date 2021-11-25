Feature: I am on the Automation practice website
    Scenario: I can signin and create the account
        Given I am on the home page of automation practice website
        When I click on sign in button, I must be navigated to my account page
        When I enter email address and click on create account, I must be navigated to account creation page
        Then I should see page header text
        When I enter title as Mrs
        And I enter Firstname ,Lastname ,password
        And I give Date of Birth
        And I check for Receive special offers from our partners!
        And I enter company and address
        And I enter city,state,country and Postal code
        And  I enter mobile number 
        And I assign any alias address 
        And I click on Register button
        Then I should see header text as "MY ACCOUNT"
        Then I should see the url contains my-account
