import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
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
  postId: string = '';
  isCollect=false;
  isFavorite=false;
  likeNumber=0;
  constructor(private authService: CommitServiceService, public login: LoginToServerService,private route: ActivatedRoute,private navCtrl: NavController) {
    this.postId = this.route.snapshot.paramMap.get('postId') || '';
  }
  ngOnInit() {
    this.authService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

  goToDetailPage() {
    this.navCtrl.navigateForward(['/post'],{  }); // 跳转到 detail 页面
  }

  likeComment(commentId: string) {
    this.authService.likeComment(commentId).subscribe(() => {
      this.isCollect=true;
      this.ngOnInit();
    });
  }

  favoriteComment(commentId: string) {
    this.authService.favoriteComment(commentId).subscribe(() => {
      this.isFavorite=true;
    });
  }

  submitPost() {
    this.authService.createPost(this.newPost).subscribe(() => {
      this.newPost = ''; // Clear the input box
      this.ngOnInit(); // Refresh post list
    });
  }


}
