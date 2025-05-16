import {Component, OnInit} from '@angular/core';
import { NavigationExtras} from '@angular/router';
import { ChatService} from "../services/chat.service";
import {UserdataService} from "../services/userdata.service";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page implements OnInit {

  newPost: string = '';
  posts: any[] = [];
  constructor(private authService: ChatService, public login: UserdataService, private navCtrl: NavController) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.authService.getPosts().subscribe((data: any) => {
      this.posts = data;

      this.posts.forEach(post => {
        // 获取点赞数量
        this.authService.Alllikenumber(post.id).subscribe((likeData: any) => {
          post.likeCount = likeData[0]["COUNT(*)"] || 0;
        });

        this.authService.isPostLiked(post.id).subscribe((isLike: any) => {
          if(isLike[0]["COUNT(*)"]>0) {post.isLike = true;}
          else post.isLike = false;
        })
        this.authService.isPostFavor(post.id).subscribe((isFavorite: any) => {
          if(isFavorite[0]["COUNT(*)"]>0) {
            post.isFavorite = true;
          }else  post.isFavorite = false;
        })
      });
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
      this.posts[parseFloat(commentId)].isLike=true;
      this.refresh();
    });
  }

  favoritePost(commentId: string) {
    this.authService.favoritePost(commentId).subscribe(() => {
      this.posts[parseFloat(commentId)].isFavorite=true;
      this.refresh(); // Refresh post list
    });
  }

  submitPost() {
    this.authService.createPost(this.newPost).subscribe(() => {
      this.newPost = ''; // Clear the input box
      this.refresh(); // Refresh post list
    });
  }

}
