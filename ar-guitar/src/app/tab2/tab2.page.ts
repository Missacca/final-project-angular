import { Component } from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  SongName: string[]= ['little Star', 'Happy Birthday', 'Bingo', 'ABC Song'];
  constructor(public dialog: MatDialog) {}
  openView(a: number) {
    console.log('Opening dialog for song index:', a);
    switch (a) {
      case 11:
        this.dialog.open(SongPage);
        break;
      case 14:
        this.dialog.open(SongPage2);
        break;
      case 5:
        this.dialog.open(SongPage3);
        break;
      case 8:
        this.dialog.open(SongPage4);
        break;
    }
  }
}
@Component({
  selector: 'Song',
  templateUrl: 'Song.html',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatButton,
    MatDialogActions
  ]
})
export class SongPage {}

@Component({
  selector: 'Song2',
  templateUrl: 'Song2.html',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatButton,
    MatDialogActions
  ]
})
export class SongPage2 {}


@Component({
  selector: 'Song3',
  templateUrl: 'Song3.html',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatButton,
    MatDialogActions
  ]
})
export class SongPage3 {}

@Component({
  selector: 'Song4',
  templateUrl: 'Song4.html',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogClose,
    MatButton,
    MatDialogActions
  ]
})
export class SongPage4 {}
