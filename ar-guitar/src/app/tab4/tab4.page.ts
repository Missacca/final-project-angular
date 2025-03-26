import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CommitServiceService} from "../commit-service.service";
import {LoginToServerService} from "../login-to-server.service";
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page  {

  newPost: string = '';
  posts: any[] = [];
  newComment: string = '';
  comments: any[] = [];
  postId: string = '';
  constructor(private authService: CommitServiceService, public login: LoginToServerService,private route: ActivatedRoute) {
    this.postId = this.route.snapshot.paramMap.get('postId') || '';
  }
  ngOnInit() {
    this.authService.getComments(this.postId).subscribe((data: any) => {
      this.comments = data;
    });

    this.authService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

  submitPost() {
    this.authService.createPost(this.newPost).subscribe(() => {
      this.newPost = ''; // 清空输入框
      this.ngOnInit(); // 刷新帖子列表
    });
  }

  submitComment() {
    this.authService.addComment(this.newComment, this.postId).subscribe(() => {
      this.newComment = '';
      this.ngOnInit(); // 刷新评论列表
    });
  }
}
