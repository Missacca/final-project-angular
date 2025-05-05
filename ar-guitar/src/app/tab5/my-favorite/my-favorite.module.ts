import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFavoritePageRoutingModule } from './my-favorite-routing.module';

import { MyFavoritePage } from './my-favorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFavoritePageRoutingModule
  ],
  declarations: [MyFavoritePage]
})
export class MyFavoritePageModule {}
