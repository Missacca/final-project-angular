import { Component } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
  standalone: false
})
export class PrivacyPage{

  constructor(private navCtrl: NavController) {}

  navigateTo(path: string) {
    this.navCtrl.navigateForward(`${path}`);
  }
}
