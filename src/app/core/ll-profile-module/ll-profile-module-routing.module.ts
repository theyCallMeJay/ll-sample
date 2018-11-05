import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LlProfileComponent } from './ll-profile/ll-profile.component';
import { LlPostsComponent } from './ll-posts/ll-posts.component';
import { LlTodosComponent } from './ll-todos/ll-todos.component';
import { LlAlbumComponent } from './ll-album/ll-album.component';

const routes: Routes = [
  {
    path: '',
    component: LlProfileComponent,
    children: [
      {path: 'posts', component: LlPostsComponent },
      {path: 'todos', component: LlTodosComponent},
      {path: 'albums', component: LlAlbumComponent},
      {path: '', redirectTo: 'posts', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlProfileModuleRoutingModule { }
