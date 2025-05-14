import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.page.html',
  styleUrls: ['./my-favorite.page.scss'],
  standalone: false
})
export class MyFavoritePage implements OnInit {
  posts: any[] = [];
  constructor(private server: ChatService) { }

  ngOnInit(): void {
    this.server.getAllFavorites().subscribe((data: any) => {
        this.posts = data;
      }
    )
  }

}
