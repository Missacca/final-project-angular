import { Component} from '@angular/core';
import {LoginToServerService} from "../login-to-server.service";
@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: false,
})
export class Tab5Page {
  constructor(private loginToServerService: LoginToServerService  ) { }
  showLogin = true;
  loginData = {
    email: '',
    password: '',
  };
  registerData = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
  };

  switchToLogin() {
    this.showLogin = true;
  }

  switchToRegister() {
    this.showLogin = false;
  }

  onLogin(email: string, password: string) {
    this.loginToServerService.onLogin(email,password);
    alert("Login successfull");
  }

  onRegister() {
    if(this.registerData.rePassword != this.registerData.password) {
        alert("The password is entered inconsistently");
    }else {
      console.log('Registering with', this.registerData);
      this.loginToServerService.onRegister(this.registerData.name, this.registerData.email, this.registerData.password);
    }
  }
}
