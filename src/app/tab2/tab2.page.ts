import { Component } from '@angular/core';
import { Router} from "@angular/router";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  SongName: string[]= ['little Star', '晴天', 'Bingo', 'ABC Song'];
  constructor(private router: Router) {}
  openView(a: number) {
    console.log('Opening dialog for song index:', a);
    switch (a) {
      case 11:
        this.router.navigate(['/tab-songs', 1]);
        break;
      case 2:
        this.router.navigate(['/tab-songs', 2]);
        break;
      case 5:
        this.router.navigate(['/tab-songs', 3]);
        break;
      case 8:
        this.router.navigate(['/tab-songs', 4]);
        break;
    }
  }
}
