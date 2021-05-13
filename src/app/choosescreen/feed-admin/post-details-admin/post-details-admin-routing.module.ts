import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDetailsAdminPage } from './post-details-admin.page';

const routes: Routes = [
  {
    path: '',
    component: PostDetailsAdminPage
  },
  {
    path: ":id",
    component: PostDetailsAdminPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDetailsAdminPageRoutingModule {}
