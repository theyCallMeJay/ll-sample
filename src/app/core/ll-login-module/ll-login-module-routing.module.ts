import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LlLoginComponent } from './ll-login/ll-login.component';

const routes: Routes = [
  {path: '', component: LlLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlLoginModuleRoutingModule { }
