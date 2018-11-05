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





@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    LlProfileModuleRoutingModule,
    NgxDatatableModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule
  ],
  declarations: [
    LlProfileComponent,
    LlPostsComponent,
    LlSearchbarComponent,
    LlTodosComponent,
    LlNavbarComponent
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LlProfileModuleModule { }
