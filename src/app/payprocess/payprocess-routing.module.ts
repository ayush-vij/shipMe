import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayprocessPage } from './payprocess.page';

const routes: Routes = [
  {
    path: '',
    component: PayprocessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayprocessPageRoutingModule {}
