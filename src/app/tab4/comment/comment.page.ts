import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommitServiceService} from "../../services/commit-service.service";
import {LoginToServerService} from "../../services/login-to-server.service";
import {firstValueFrom} from "rxjs";
@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
  standalone: false
})
export class CommentPage implements OnInit {
  newComment: string = '';
  comments: any[] = [];
  receivedPostId='';
  receivedPostContent = '';
  receivedPostUsername='';
  ilike=false;
  iFavorite=false;

  constructor(private authService: CommitServiceService, public login: LoginToServerService,private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
      this.route.queryParams.subscribe(params => {
      const currentNavigation = this.router.getCurrentNavigation();

      if (currentNavigation && currentNavigation.extras && currentNavigation.extras.state) {
        this.receivedPostId = currentNavigation.extras.state['id'];
        this.receivedPostContent = currentNavigation.extras.state['content'];
        this.receivedPostUsername = currentNavigation.extras.state['username'];
        console.log('Detail 页接收到的 postId:', this.receivedPostId, this.receivedPostContent, this.receivedPostUsername);
        this.loadComments(this.receivedPostId);
      } else {
        console.log('Detail 页没有接收到 id');
      }
    });
  }

  loadComments(postId: any) {
    this.authService.getComments(postId).subscribe((data: any) => {
      this.comments = data;
    });
  }

  async submitComment() {
    try {
      await firstValueFrom(this.authService.addComment(this.newComment, this.receivedPostId));
      this.newComment = '';
      this.loadComments(this.receivedPostId);
    } catch (error) {
      console.error('提交评论失败:', error);
    }
  }

  likeComment(commentId: string) {
    this.authService.likeComment(commentId).subscribe(() => {
      this.ilike=true;
    });
    console.log("Favorite comment: " + commentId);
    this.loadComments(this.receivedPostId);
  }

  favoriteComment(commentId: string) {
    this.authService.favoriteComment(this.receivedPostId).subscribe(() => {
      console.log(`Favorite comments: ${commentId}`);
    });
    console.log("Favorite comment: " + commentId);
    this.loadComments(this.receivedPostId);
  }

}
