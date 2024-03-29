import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'choosescreen',
    loadChildren: () => import('./choosescreen/choosescreen.module').then( m => m.ChoosescreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'payprocess',
    loadChildren: () => import('./payprocess/payprocess.module').then( m => m.PayprocessPageModule)
  },  {
    path: 'paysuccess',
    loadChildren: () => import('./paysuccess/paysuccess.module').then( m => m.PaysuccessPageModule)
  },
  {
    path: 'payforward',
    loadChildren: () => import('./payforward/payforward.module').then( m => m.PayforwardPageModule)
  },

  // {
  //   path: 'majorfeed',
  //   loadChildren: () => import('./admin-login/majorfeed/majorfeed.module').then( m => m.MajorfeedPageModule)
  // },



];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
