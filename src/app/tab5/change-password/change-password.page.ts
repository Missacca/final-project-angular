import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {LoginToServerService} from "../../services/login-to-server.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
  standalone: false
})
export class ChangePasswordPage implements OnInit {
  userData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  constructor(
    private loginToServerService: LoginToServerService,
    private navCtrl: NavController
  ) {}

  navigateTo(path: string) {
    this.navCtrl.navigateForward(`${path}`);
  }

  async ngOnInit() {
    try {
      const user = await this.loginToServerService.getCurrentUser().toPromise();
      this.userData.name = user.name;
      this.userData.email = user.email;
      this.userData.password = user.password;
    } catch (err) {
      console.error('Failed to load user info', err);
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  onSave() {
    if (!this.userData.name.trim()) {
      alert('Name cannot be empty.');
      return;
    }

    if (!this.validateEmail(this.userData.email)) {
      alert('Invalid email address.');
      return;
    }

    if (this.userData.password && this.userData.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    if (this.userData.password !== this.userData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    this.loginToServerService.updateUserInfo(this.userData.name,this.userData.email,this.userData.password);
  }
}
