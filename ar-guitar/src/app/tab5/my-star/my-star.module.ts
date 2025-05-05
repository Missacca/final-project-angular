import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyStarPageRoutingModule } from './my-star-routing.module';

import { MyStarPage } from './my-star.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyStarPageRoutingModule
  ],
  declarations: [MyStarPage]
})
export class MyStarPageModule {}
