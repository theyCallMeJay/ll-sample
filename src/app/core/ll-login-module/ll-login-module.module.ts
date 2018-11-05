import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LlLoginModuleRoutingModule } from './ll-login-module-routing.module';
import { LlLoginComponent } from './ll-login/ll-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  imports: [
    CommonModule,
    LlLoginModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [LlLoginComponent]
})
export class LlLoginModuleModule { }
