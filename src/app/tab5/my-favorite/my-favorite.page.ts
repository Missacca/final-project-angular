import { Component, OnInit } from '@angular/core';
import {CommitServiceService} from "../../commit-service.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.page.html',
  styleUrls: ['./my-favorite.page.scss'],
  standalone: false
})
export class MyFavoritePage implements OnInit {
  posts: any[] = [];
  constructor(private server: CommitServiceService, private navCtrl: NavController) { }

  navigateTo(path: string) {
    this.navCtrl.navigateForward(`${path}`);
  }

  ngOnInit(): void {
    this.server.getAllFavorites().subscribe((data: any) => {
        this.posts = data;
      }
    )
  }

}
