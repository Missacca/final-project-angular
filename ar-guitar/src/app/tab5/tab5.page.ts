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
    { label: '我的收藏', path: 'MyFavorite', icon: 'heart-outline' },
    { label: '我的点赞', path: 'MyStar', icon: 'star-outline' },
    { label: '隐私政策', path: 'privacy', icon: 'lock-closed-outline' },
    { label: '联系我们', path: 'ContractUs', icon: 'mail-outline' },
    { label: '修改密码', path: 'change-password', icon: 'key-outline' },
    { label: '登录', path: 'login', icon: 'log-in-outline' }
  ];

  navigateTo(path: string) {
    this.navCtrl.navigateForward(`${path}`);
  }


}
