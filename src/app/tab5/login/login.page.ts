import { Component, OnInit } from '@angular/core';
import {LoginToServerService} from "../../login-to-server.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  constructor(private loginToServerService: LoginToServerService,private navCtrl: NavController ) { }
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
    this.navCtrl.navigateForward('/tabs/tab5'); // 跳转到 detail 页面
  }

  onRegister() {
    if(this.registerData.rePassword != this.registerData.password) {
      alert("The password is entered inconsistently");
    }else {
      console.log('Registering with', this.registerData);
      this.loginToServerService.onRegister(this.registerData.name, this.registerData.email, this.registerData.password);
      this.switchToLogin();
    }
  }
}
