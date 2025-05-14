import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagePageRoutingModule } from './image-routing.module';

import { ImagePage } from './image.page';
import {Routes} from "@angular/router";
const routes: Routes = [
  {
    path: '',
    component: ImagePage
  }

];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagePageRoutingModule
  ],
  declarations: [ImagePage]
})
export class ImagePageModule {}
