import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {UserdataService} from "../../services/userdata.service";

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.page.html',
  styleUrls: ['./my-favorite.page.scss'],
  standalone: false
})
export class MyFavoritePage implements OnInit {
  posts: any[] = [];
  constructor(private server: ChatService,private  userService: UserdataService) { }

  ngOnInit(): void {
    this.server.getAllFavorites().subscribe((data: any) => {
        this.posts = data;
      }
    )
  }

  DeletePost(postId: any) {
    this.userService.DeletePost(postId).subscribe((data: any) => {
      console.log(data);
      alert("Deleted!");
      this.ngOnInit()
    })
  }

}
