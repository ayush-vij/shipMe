import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginPage } from './admin-login.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginPage
  },
  // {
  //   path: 'cs',
  //   loadChildren: () => import('./choosescreen/choosescreen.module').then( m => m.ChoosescreenPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLoginPageRoutingModule {}
