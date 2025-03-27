import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommitServiceService} from "../commit-service.service";
import {LoginToServerService} from "../login-to-server.service";
@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
  standalone: false
})
export class CommentPage implements OnInit {
  postId: string = '';
  newComment: string = '';
  comments: any[] = [];
  constructor(private authService: CommitServiceService, public login: LoginToServerService,private route: ActivatedRoute) {
    this.postId = this.route.snapshot.paramMap.get('postId') || '';
  }

  ngOnInit() {
    this.authService.getComments(this.postId).subscribe((data: any) => {
      this.comments = data;
    });
  }

  submitComment() {
    this.authService.addComment(this.newComment, this.postId).subscribe(() => {
      this.newComment = '';
      this.ngOnInit(); // 刷新评论列表
    });
  }

  likeComment(commentId: string) {
    this.authService.likeComment(commentId).subscribe(() => {
      this.ngOnInit();
    });
  }

  favoriteComment(commentId: string) {
    this.authService.favoriteComment(commentId).subscribe(() => {
      console.log(`Favorite comments: ${commentId}`);
    });
  }

}
