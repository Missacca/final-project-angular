import { Component } from '@angular/core';
import { Router} from "@angular/router";
import {SongdataService} from "../services/songdata.service";

import {Song} from "./song";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  songs: Song[] = [];

  SongName: string[]= ['little Star', '晴天', 'Bingo', 'ABC Song'];
  constructor(private router: Router, private data: SongdataService) {}

  ionViewWillEnter() { // Refresh the data while enter the page
    this.data.getAllSongs().subscribe((res) => {
      this.songs = res;
      console.log(this.songs);
    })
  }



  openView(a: number) {
    console.log('Opening dialog for song index:', a);
    this.router.navigate(['/tab-songs', a]);
  }
}
