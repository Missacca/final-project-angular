import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyStarPage } from './my-star.page';

const routes: Routes = [
  {
    path: '',
    component: MyStarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyStarPageRoutingModule {}
