import Page from './page';
import utl from '../../utilities/common-utilities';

class RegisterPage extends Page {
  
  get firstNameInput() { return $('input#FirstName'); }
  get lastNameInput() { return $('input#LastName'); }
  get emailInput() { return $('input#Email'); }
  get passwordInput() { return $('input#Password'); }
  get confirmPasswordInput() { return $('input#ConfirmPassword'); }
  get registerButton() { return $('input[type="Submit"][value="Register"]'); }
  today = Date();
  time = today.getHours() + today.getMinutes() + today.getSeconds() + today.getDate();
  //get Radio
  //get birthdate
  get logoutLink() { return $('a.ico-logout'); }
  
  open () {
    super.open('/register');
  }

  registerName (fname, lname) {
    this.firstNameInput.setValue(fname);
    this.lastNameInput.setValue(lname);
  }

  registerCredentials (username, password, confirmed) { 
    // The random function is to ensure a random email is input at the test run, to prevent failure from same email name
    // Timecode?
    this.emailInput.setValue(time+(Math.floor(Math.random() * 1000) + 1)+username);
    this.passwordInput.setValue(password);
    this.confirmPasswordInput.setValue(confirmed);
    //Comments for every function, Clear function names
  }

  submitRegistration () {
    this.registerButton.click();
  }

  isLogoutShowing() {
    this.logoutLink.waitForDisplayed(3000);
    return this.logoutLink.isDisplayed();
  }
}

export default new RegisterPage()
