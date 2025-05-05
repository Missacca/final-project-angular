import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractUsPage } from './contract-us.page';

const routes: Routes = [
  {
    path: '',
    component: ContractUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractUsPageRoutingModule {}
