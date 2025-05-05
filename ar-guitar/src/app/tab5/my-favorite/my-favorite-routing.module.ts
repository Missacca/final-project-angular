import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFavoritePage } from './my-favorite.page';

const routes: Routes = [
  {
    path: '',
    component: MyFavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFavoritePageRoutingModule {}
