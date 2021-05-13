import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajorfeedPage } from './majorfeed.page';

const routes: Routes = [
  {
    path: '',
    component: MajorfeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MajorfeedPageRoutingModule {}
