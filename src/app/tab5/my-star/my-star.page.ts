import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {CommitServiceService} from "../../commit-service.service";

@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.page.html',
  styleUrls: ['./my-star.page.scss'],
  standalone: false
})
export class MyStarPage implements OnInit {
  posts: any[] = [];
  constructor(private server: CommitServiceService, private navCtrl: NavController) { }

  navigateTo(path: string) {
    this.navCtrl.navigateForward(`${path}`);
  }

  ngOnInit(): void {
    this.server.getAllStar().subscribe((data: any) => {
        this.posts = data;
      }
    )
  }
}
