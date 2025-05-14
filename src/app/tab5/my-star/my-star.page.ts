import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-my-star',
  templateUrl: './my-star.page.html',
  styleUrls: ['./my-star.page.scss'],
  standalone: false
})
export class MyStarPage implements OnInit {
  posts: any[] = [];
  constructor(private server: ChatService) { }

  ngOnInit(): void {
    this.server.getAllStar().subscribe((data: any) => {
        this.posts = data;
      }
    )
  }
}
