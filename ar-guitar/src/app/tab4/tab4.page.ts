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
  postId: string = '';
  isCollect=false;
  isFavorite=false;
  constructor(private authService: CommitServiceService, public login: LoginToServerService,private route: ActivatedRoute) {
    this.postId = this.route.snapshot.paramMap.get('postId') || '';
  }
  ngOnInit() {
    this.authService.getPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

  likeComment(commentId: string) {
    this.authService.likeComment(commentId).subscribe(() => {
      this.isCollect=true;
      this.ngOnInit();
    });
  }

  favoriteComment(commentId: string) {
    this.authService.favoriteComment(commentId).subscribe(() => {
      this.isFavorite=false;
    });
  }

  submitPost() {
    this.authService.createPost(this.newPost).subscribe(() => {
      this.newPost = ''; // Clear the input box
      this.ngOnInit(); // Refresh post list
    });
  }


}
