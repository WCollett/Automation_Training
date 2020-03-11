import { Given} from 'cucumber';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';


Given('I am on the Login Page', function () {
  // Write code here that turns the phrase above into concrete actions
  loginPage.open();     // navigating to login page
  browser.getTitle().should.equal('Your store. Login');
});

Given('I am on the Registration Page', function () {
  // Write code here that turns the phrase above into concrete actions
  registerPage.open();     // navigating to login page
  browser.getTitle().should.equal('Your store. Register');
});