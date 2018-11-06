import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LlProfileModuleRoutingModule } from './ll-profile-module-routing.module';
import { LlProfileComponent } from './ll-profile/ll-profile.component';
import { LlPostsComponent } from './ll-posts/ll-posts.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LlSearchbarComponent } from '../../shared/component/ll-searchbar/ll-searchbar.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LlTodosComponent } from './ll-todos/ll-todos.component';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LlNavbarComponent } from 'src/app/shared/component/ll-navbar/ll-navbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LlAlbumComponent } from './ll-album/ll-album.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { LlDialogComponent } from 'src/app/shared/component/ll-dialog/ll-dialog.component';
import { MatButtonModule } from '@angular/material/button';






@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    LlProfileModuleRoutingModule,
    NgxDatatableModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    LlProfileComponent,
    LlPostsComponent,
    LlSearchbarComponent,
    LlTodosComponent,
    LlNavbarComponent,
    LlAlbumComponent,
    LlDialogComponent
    ],
  entryComponents: [LlDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LlProfileModuleModule { }
