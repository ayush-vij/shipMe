import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedCommuterPage } from './feed-commuter.page';

const routes: Routes = [
  {
    path: '',
    component: FeedCommuterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedCommuterPageRoutingModule {}
