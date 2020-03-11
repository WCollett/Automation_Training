import Page from './page';
import utl from '../../utilities/common-utilities';

class LoginPage extends Page {
  open () {
    super.open('/login');
  }
  login (username, password) {
    this.emailInput.setValue(username);
    this.passwordInput.setValue(password);
    this.loginButton.click();
  }

  get emailInput() { return $('input#Email'); }
  get passwordInput() { return $('input#Password'); }
  get loginButton() { return $('input[type="Submit"][value="Log in"]'); }
  get logoutLink() { return $('a.ico-logout'); }

  isLogoutShowing() {
    this.logoutLink.waitForDisplayed(3000);
    return this.logoutLink.isDisplayed();
  }
}

export default new LoginPage()
