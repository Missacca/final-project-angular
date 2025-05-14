import { Component, OnInit } from '@angular/core';
import {UserdataService} from "../../services/userdata.service";
import {LoadingController} from "@ionic/angular";

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
    private loginToServerService: UserdataService, private loadingCtrl: LoadingController
  ) {}

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
  async ngOnInit() {
    try {
      const user = await this.loginToServerService.getCurrentUser().toPromise();
      this.userData.name = user.username;
      this.userData.email = user.email;
      this.userData.password = user.password;
    } catch (err) {
      console.error('Failed to load user info', err);
    }

  }

  async onSave() {

    if (this.userData.password && this.userData.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    if (this.userData.password !== this.userData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    await this.presentLoading(); // 显示 loading
    this.loginToServerService.updateUserInfo(this.userData.password)
      .subscribe((response: any) => {
          this.dismissLoading();
          alert("updated successfully");
        },
        (error: any) => {
          this.dismissLoading();
          console.error(this.userData.password);
          alert('update Failed');
        });
  }
}
