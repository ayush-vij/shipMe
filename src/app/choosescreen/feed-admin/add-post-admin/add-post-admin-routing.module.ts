import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostAdminPage } from './add-post-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AddPostAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPostAdminPageRoutingModule {}
