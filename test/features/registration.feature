Feature: Registering a new user

    As a user on the registration page
    I want to register a new account
    Because I want to access a new account

    Background: 
    
        Given I am on the Registration Page

    Scenario Outline: Performing New Registration operation with passing test data as test table
        When I enter a first and last name <first> <last> on the registration page
        And I enter new credential information <email> <password> <confirm> on the registration page 
        And I click the Register button
        Then I should see the register logout link

        Examples:
        |first| |last| |email| |password| |confirm|
        |"Testy"| |"McTesterson"| |"Testy.McTest2@test.us"||"Testing1!"| |"Testing1!"|