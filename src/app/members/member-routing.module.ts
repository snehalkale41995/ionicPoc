import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'user-details/:id',
    loadChildren: () => import('./user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },  {
    path: 'user-form',
    loadChildren: () => import('./user-form/user-form.module').then( m => m.UserFormPageModule)
  },


  // {
  //   path: 'userDetail/:id',
  //   loadChildren: () => import('./user-details/user-details.component').then( m => m.UserDetailsComponent)
  // }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MemberRoutingModule { }
