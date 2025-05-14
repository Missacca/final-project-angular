import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.page.html',
  styleUrls: ['./my-posts.page.scss'],
  standalone: false
})
export class MyPostsPage implements OnInit {
  posts: any[] = [];
  constructor(private server: ChatService) { }

  ngOnInit(): void {
    this.server.getAllPosts().subscribe((data: any) => {
        this.posts = data;
        console.log(data);
      }
    )
  }
}
