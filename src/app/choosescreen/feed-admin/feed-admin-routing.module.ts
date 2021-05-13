import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedAdminPage } from './feed-admin.page';

const routes: Routes = [
  {
    path: '',
    component: FeedAdminPage
  },
  {
    path: 'add-post',
    loadChildren: () => import('./add-post-admin/add-post-admin.module').then( m => m.AddPostAdminPageModule)
  },
  {
    path: 'post-details',
    loadChildren: () => import('./post-details-admin/post-details-admin.module').then( m => m.PostDetailsAdminPageModule)
  },
  {
    path: 'post-details',
    loadChildren: () => import('./post-details-admin/post-details-admin-routing.module').then( m => m.PostDetailsAdminPageRoutingModule)
  },
  {
    path: 'post-detailss',
    loadChildren: () => import('./post-details-admin/post-details-admin.module').then( m => m.PostDetailsAdminPageModule)
  },
  {
    path: 'add-post-admin',
    loadChildren: () => import('./add-post-admin/add-post-admin.module').then( m => m.AddPostAdminPageModule)
  },
  {
    path: 'post-details-admin',
    loadChildren: () => import('./post-details-admin/post-details-admin.module').then( m => m.PostDetailsAdminPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedAdminPageRoutingModule {}
