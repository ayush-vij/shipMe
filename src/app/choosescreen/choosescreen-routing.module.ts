import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosescreenPage } from './choosescreen.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosescreenPage
  },
  {
    path: 'feed-commuter',
    loadChildren: () => import('./feed-commuter/feed-commuter.module').then( m => m.FeedCommuterPageModule)
  },
  {
    path: 'feed-orderer',
    loadChildren: () => import('./feed-orderer/feed-orderer.module').then( m => m.FeedOrdererPageModule)
  },  {
    path: 'feed-admin',
    loadChildren: () => import('./feed-admin/feed-admin.module').then( m => m.FeedAdminPageModule)
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosescreenPageRoutingModule {}
