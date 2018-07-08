import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { UserInputComponent } from './user-input/user-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule
  ],
  declarations: [FormComponent, UserInputComponent]
})
export class FormModule { }
