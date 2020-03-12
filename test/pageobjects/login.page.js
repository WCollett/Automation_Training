import Page from './page';
import utl from '../../utilities/common-utilities';

class LoginPage extends Page {

  get emailInput() { return $('input#Email'); }
  get passwordInput() { return $('input#Password'); }
  get loginButton() { return $('input[type="Submit"][value="Log in"]'); }
  get logoutLink() { return $('a.ico-logout'); }

  // Open the login page directly
  open () {
    super.open('/login');
  }

  // Login to training site on the login page using email and password
  login (username, password) {
    this.emailInput.setValue(username);
    this.passwordInput.setValue(password);
    this.loginButton.click();
  }

  // Verify the "logout" link appears after login operation
  isLogoutShowing() {
    this.logoutLink.waitForDisplayed(3000);
    return this.logoutLink.isDisplayed();
  }
}

export default new LoginPage()
