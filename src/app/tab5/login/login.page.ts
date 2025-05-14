import { Component, OnInit } from '@angular/core';
import {UserdataService} from "../../services/userdata.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  constructor(private loginToServerService: UserdataService, private navCtrl: NavController ) { }
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

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  switchToLogin() {
    this.showLogin = true;
  }


  switchToRegister() {
    this.showLogin = false;
  }

  onLogin(email: string, password: string) {
    if (!this.validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    this.loginToServerService.onLogin(email, password);
    alert("Login successful");
    this.navCtrl.navigateForward('/tabs/tab5');
  }

  onRegister() {
    if (!this.validateEmail(this.registerData.email)) {
      alert("Please enter a valid email address.");
      return;
    } else if(this.registerData.rePassword != this.registerData.password) {
      alert("The password is entered inconsistently");
      return;
    }
    if (this.registerData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
      console.log('Registering with', this.registerData);
      this.loginToServerService.onRegister(this.registerData.name, this.registerData.email, this.registerData.password);
      this.switchToLogin();
  }
}
