import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedOrdererPage } from './feed-orderer.page';

const routes: Routes = [
  {
    path: '',
    component: FeedOrdererPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedOrdererPageRoutingModule {}
