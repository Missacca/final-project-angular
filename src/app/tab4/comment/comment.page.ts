import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ChatService} from "../../services/chat.service";
import {UserdataService} from "../../services/userdata.service";
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

  constructor(private authService: ChatService, public login: UserdataService, private route: ActivatedRoute, private router: Router) {}
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

      this.comments.forEach(post => {
        // 获取点赞数量
        this.authService.AllCommentsNumber(post.id).subscribe((likeData: any) => {
          post.likeCount = likeData[0]["COUNT(*)"] || 0;
        });

        this.authService.isCommentLiked(post.id).subscribe((isLike: any) => {
          if(isLike[0]["COUNT(*)"]>0) {post.isLike = true;}
          else post.isLike = false;
        })
        this.authService.isCommentFavor(post.id).subscribe((isFavorite: any) => {
          if(isFavorite[0]["COUNT(*)"]>0) {
            post.isFavorite = true;
          }else  post.isFavorite = false;
        })
      });
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
      const comment = this.comments.find(c => c.id === commentId);
      if (comment) comment.isLike = true;
    });
    this.loadComments(this.receivedPostId);
  }

  favoriteComment(commentId: string) {
    this.authService.favoriteComment(commentId).subscribe(() => {
      const comment = this.comments.find(c => c.id === commentId);
      if (comment) comment.isFavorite = true;
    });
    this.loadComments(this.receivedPostId);
  }

}
