import { Component} from '@angular/core';
import {UserdataService} from "../services/userdata.service";
import {NavController} from "@ionic/angular";
@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: false,
})
export class Tab5Page {
  constructor(private navCtrl: NavController) {}
  menuItems = [
    { label: 'My Favorite', path: 'MyFavorite', icon: 'heart-outline' },
    { label: 'My Star', path: 'MyStar', icon: 'star-outline' },
    { label: 'Privacy', path: 'privacy', icon: 'lock-closed-outline' },
    { label: 'Contract Us', path: 'ContractUs', icon: 'mail-outline' },
    { label: 'change password', path: 'change-password', icon: 'key-outline' },
    { label: 'change account', path: 'login', icon: 'log-in-outline' },
    { label: 'Download Feature Image', path: 'image', icon: 'cloud-download-outline' },
    { label: 'Support Us', path: 'Pay', icon: 'eye-outline' }
  ];

  navigateTo(path: string) {
    this.navCtrl.navigateForward(`${path}`);
  }


}
