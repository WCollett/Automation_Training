import Page from './page';
import utl from '../../utilities/common-utilities';

class RegisterPage extends Page {
  open () {
    super.open('/register');
  }
  register (fname, lname, username, password, confirmed) {
    this.firstNameInput.setValue(fname);
    this.lastNameInput.setValue(lname);
    this.emailInput.setValue(username);
    this.passwordInput.setValue(password);
    this.confirmPasswordInput.setValue(confirmed);
    this.registerButton.click();
  }

  get firstNameInput() { return $('input#FirstName'); }
  get lastNameInput() { return $('input#LastName'); }
  get emailInput() { return $('input#Email'); }
  get passwordInput() { return $('input#Password'); }
  get confirmPasswordInput() { return $('input#ConfirmPassword'); }
  get registerButton() { return $('input[type="Submit"][value="Register"]'); }
  get logoutLink() { return $('a.ico-logout'); }

  isLogoutShowing() {
    this.logoutLink.waitForDisplayed(3000);
    return this.logoutLink.isDisplayed();
  }
}

export default new RegisterPage()
