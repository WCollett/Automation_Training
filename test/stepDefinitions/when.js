import {Given, When, Then} from 'cucumber';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';


// *** belongs to ta-loging  feature
When(/^I login with email and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
});

When(/^I register with name email and password "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2, arg3, arg4, arg5) {
    registerPage.register(arg1, arg2, arg3, arg4, arg5);    // entering user name, password and and submiting the page
});