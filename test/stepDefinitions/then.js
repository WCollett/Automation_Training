import { Then } from 'cucumber';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';


Then('I should see the logout link', function () {
  loginPage.isLogoutShowing().should.be.true;
});

Then('I should see the register logout link', function () {
  registerPage.isLogoutShowing().should.be.true;
});