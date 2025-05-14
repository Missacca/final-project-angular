import { Component, OnInit } from '@angular/core';
import {UserdataService} from "../../services/userdata.service";

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
    private loginToServerService: UserdataService,
  ) {}


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

  onSave() {

    if (this.userData.password && this.userData.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    if (this.userData.password !== this.userData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    this.loginToServerService.updateUserInfo(this.userData.password);
  }
}
