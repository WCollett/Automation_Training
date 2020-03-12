import {Given, When, Then} from 'cucumber';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';


// *** 
When(/^I login with email and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
});

When(/^I enter a first and last name "([^"]*)" "([^"]*)" on the registration page$/, function (arg1, arg2) {
    registerPage.registerName(arg1, arg2);    // entering user name, password and and submiting the page
});

When(/^I enter new credential information "([^"]*)" "([^"]*)" "([^"]*)" on the registration page$/, function (arg1, arg2, arg3) {
    registerPage.registerCredentials(arg1, arg2, arg3);
});

When(/^I click the Register button$/, function() {
    registerPage.submitRegistration();
});