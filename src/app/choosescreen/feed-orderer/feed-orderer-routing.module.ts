import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedOrdererPage } from './feed-orderer.page';

const routes: Routes = [
  {
    path: '',
    component: FeedOrdererPage
  },
  {
    path: 'add-post',
    loadChildren: () => import('../feed-commuter/add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'post-details',
    loadChildren: () => import('../feed-commuter/post-details/post-details.module').then( m => m.PostDetailsPageModule)
  },
  {
    path: 'post-details',
    loadChildren: () => import('../feed-commuter/post-details/post-details-routing.module').then( m => m.PostDetailsPageRoutingModule)
  },
  {
    path: 'post-detailss',
    loadChildren: () => import('../feed-commuter/post-details/post-details.module').then( m => m.PostDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedOrdererPageRoutingModule {}
