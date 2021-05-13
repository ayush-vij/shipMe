import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayforwardPage } from './payforward.page';

const routes: Routes = [
  {
    path: '',
    component: PayforwardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayforwardPageRoutingModule {}
