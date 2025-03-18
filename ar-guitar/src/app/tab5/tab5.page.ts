import { Component} from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: false,
})
export class Tab5Page {

  constructor() { }
  showLogin = true;
  loginData = {
    email: '',
    password: '',
  };
  registerData = {
    name: '',
    email: '',
    password: '',
    repassword: '',
  };

  switchToLogin() {
    this.showLogin = true;
  }

  switchToRegister() {
    this.showLogin = false;
  }

  onLogin() {
    console.log('Logging in with', this.loginData);
    // Handle the login logic here
  }

  onRegister() {
    if(this.registerData.repassword != this.registerData.password) {
      alert("The password is entered inconsistently");
    }else {
      console.log('Registering with', this.registerData);
    }
    
  }

}
