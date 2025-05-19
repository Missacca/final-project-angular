import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(
    private alertController: AlertController,
    private platform: Platform
  ) {}

  async openUnityApp() {
    const unityUrl = 'myunityapp://open?data=from_ionic_tab1';

    // 尝试跳转到 Unity 应用
    if (this.platform.is('android')) {
      // 使用超时检测跳转是否成功
      const startTime = Date.now();
      window.location.href = unityUrl;

      // 等待 1 秒后检查是否留在当前页面
      setTimeout(async () => {
        if (Date.now() - startTime < 1500) {
          // 如果时间差小于 1.5 秒，说明未跳转（应用可能未安装）
          await this.showDownloadAlert();
        }
      }, 1000);
    } else {
      // 非移动端，直接提示下载
      await this.showDownloadAlert();
    }
  }

  async showDownloadAlert() {
    const alert = await this.alertController.create({
      header: 'Unity App Not Found',
      message: 'The Unity application is not installed. Would you like to download it?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Download',
          handler: () => {

              window.location.href = 'https://github.com/Naivebody/ARGuitarFinalProject-ARmodule'; // 替换为 Unity 应用的下载页面

          },
        },
      ],
    });
    await alert.present();
  }
}
