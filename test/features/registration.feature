Feature: Registering a new user

    As a user on the registration page
    I want to register a new account
    Because I want to access a new account

    Background: 
    
        Given I am on the Registration Page

    Scenario Outline: Performing New Registration operation with passing test data as test table
        When I register with name email and password <first> <last> <email> <password> <confirm> into the text box
        Then I should see the register logout link

        Examples:
        |first| |last| |email| |password| |confirm|
        |"Testy"| |"McTesterson"| |"Testy.McTest2@test.us"||"Testing1!"| |"Testing1!"|