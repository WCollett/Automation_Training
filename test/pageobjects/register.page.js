import Page from './page';
import utl from '../../utilities/common-utilities';

class RegisterPage extends Page {
  
  get firstNameInput() { return $('input#FirstName'); }
  get lastNameInput() { return $('input#LastName'); }
  get emailInput() { return $('input#Email'); }
  get passwordInput() { return $('input#Password'); }
  get confirmPasswordInput() { return $('input#ConfirmPassword'); }
  get registerButton() { return $('input[type="Submit"][value="Register"]'); }
  get maleRadio() { return $('input#gender-male'); }
  get femaleRadio() { return $('input#gender-female'); }
  // get birthdate fields
  get logoutLink() { return $('a.ico-logout'); }
  
  // Open the Registration Page directly
  open () {
    super.open('/register');
  }

  // Enter values in the First Name and Last Name fields on the Registration Page
  registerName (fname, lname) {
    this.firstNameInput.setValue(fname);
    this.lastNameInput.setValue(lname);
  }

  // Enter values into the email, password, and confirm password fields on the Registration page. The email is randomized with a timecode
  registerCredentials (username, password, confirmed) { 
    this.emailInput.setValue(utl.getTimeCode()+username);
    this.passwordInput.setValue(password);
    this.confirmPasswordInput.setValue(confirmed);
  }

  // Attempt to submit the Registration form
  submitRegistration () {
    this.registerButton.click();
  }

  // Verify the logout link is appearing following successful registration
  isLogoutShowing() {
    this.logoutLink.waitForDisplayed(3000);
    return this.logoutLink.isDisplayed();
  }
}

export default new RegisterPage()
