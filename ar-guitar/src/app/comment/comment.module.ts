import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentPageRoutingModule } from './comment-routing.module';

import { CommentPage } from './comment.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    CommentPageRoutingModule
  ],
  declarations: [CommentPage]
})
export class CommentPageModule {}
