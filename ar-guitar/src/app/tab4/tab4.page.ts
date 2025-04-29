import { Component } from '@angular/core';
import {ActivatedRoute, NavigationExtras, RouterLink} from '@angular/router';
import { CommitServiceService} from "../commit-service.service";
import {LoginToServerService} from "../login-to-server.service";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page  {
  newPost: string = '';
  posts: any[] = [];
  islike=false;
  isFavorite=false;
  likeNumber=0;
  constructor(private authService: CommitServiceService, public login: LoginToServerService,private navCtrl: NavController) {}

  ngOnInit() {
    this.authService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

  goToDetailPage(commentId: string,commentContent:string,commentUsername:string) {
      let navigationExtras: NavigationExtras = {
        state: {
          id: commentId,
          content:commentContent,
          username: commentUsername,
        }
      };
      this.navCtrl.navigateForward('/post',navigationExtras); // 跳转到 detail 页面
    }

  likePost(commentId: string) {
    this.authService.likePost(commentId).subscribe(() => {
      this.islike=true;
      this.likeNumber += 1;
      this.ngOnInit();
    });
  }

  favoritePost(commentId: string) {
    this.authService.favoritePost(commentId).subscribe(() => {
      this.isFavorite=true;
      this.ngOnInit(); // Refresh post list
    });
  }

  submitPost() {
    this.authService.createPost(this.newPost).subscribe(() => {
      this.newPost = ''; // Clear the input box
      this.ngOnInit(); // Refresh post list
    });
  }


}
