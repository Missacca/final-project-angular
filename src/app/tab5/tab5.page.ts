import { Component} from '@angular/core';
import {LoginToServerService} from "../login-to-server.service";
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
    { label: 'change account', path: 'login', icon: 'log-in-outline' }
  ];

  navigateTo(path: string) {
    this.navCtrl.navigateForward(`${path}`);
  }


}
