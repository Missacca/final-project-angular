import { Component, OnInit } from '@angular/core';
import {UserdataService} from "../../services/userdata.service";
import {LoadingController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  constructor(private loginToServerService: UserdataService, private navCtrl: NavController, private loadingCtrl: LoadingController ) { }
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

  loading: HTMLIonLoadingElement | null = null;

  async presentLoading(message: string = 'Please wait...') {
    this.loading = await this.loadingCtrl.create({
      message,
      spinner: 'crescent',
      duration: 0, // 无限时长，手动 dismiss
    });
    await this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
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

  async onLogin(email: string, password: string) {
    if (!this.validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    await this.presentLoading(); // 显示 loading

    this.loginToServerService.onLogin(email, password).subscribe({
      next: (response: any) => {
        this.dismissLoading();
        localStorage.setItem('token', response.token);
        alert("Login successful, welcome to guitar world.");
        this.navCtrl.navigateForward('/tabs/tab5');
      },
      error: (error: any) => {
        this.dismissLoading();
        console.error('Login Failed', error);
        alert('Login failed, check your email and password.');
      },
      complete: () => {
        this.dismissLoading(); // 隐藏 loading
      }
    });
  }

  async onRegister() {
    if (!this.validateEmail(this.registerData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (this.registerData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    if (this.registerData.password !== this.registerData.rePassword) {
      alert("Passwords do not match.");
      return;
    }

    await this.presentLoading();

    this.loginToServerService.onRegister(this.registerData.name, this.registerData.email, this.registerData.password).subscribe({
      next: (res) => {
        alert("Register successful, welcome " + this.registerData.name);
        this.switchToLogin();
      },
      error: () => {
        alert("Register failed");
      },
      complete: () => {
        this.dismissLoading();
      }
    });
  }


}
