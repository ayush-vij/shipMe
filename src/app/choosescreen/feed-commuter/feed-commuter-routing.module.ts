import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedCommuterPage } from './feed-commuter.page';

const routes: Routes = [
  {
    path: '',
    component: FeedCommuterPage
  },
  {
    path: 'add-post',
    loadChildren: () => import('./add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'post-details',
    loadChildren: () => import('./post-details/post-details.module').then( m => m.PostDetailsPageModule)
  },
  {
    path: 'post-details',
    loadChildren: () => import('./post-details/post-details-routing.module').then( m => m.PostDetailsPageRoutingModule)
  },
  {
    path: 'post-detailss',
    loadChildren: () => import('./post-details/post-details.module').then( m => m.PostDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedCommuterPageRoutingModule {}
