import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContractUsPageRoutingModule } from './contract-us-routing.module';

import { ContractUsPage } from './contract-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContractUsPageRoutingModule
  ],
  declarations: [ContractUsPage]
})
export class ContractUsPageModule {}
