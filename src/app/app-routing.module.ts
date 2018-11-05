import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './core/ll-login-module/ll-login-module.module#LlLoginModuleModule'},
  { path: 'profile', loadChildren: './core/ll-profile-module/ll-profile-module.module#LlProfileModuleModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
