Feature: Performing a Login

    As a user on the login Page
    I want to login
    Because I want to access my account

    Background: 
    
        Given I am on the Login Page

    Scenario Outline: Performing login operation with passing test data as test table
        When I login with email and password <email> <password> into the text box
        Then I should see the logout link

        Examples:
        |email| |password|
        |"will.collett@auticon.us"||"Lightcaster1!"|