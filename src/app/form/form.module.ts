import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { UserInputComponent } from './user-input/user-input.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FormComponent, UserInputComponent, TemplateDrivenFormsComponent, ReactiveFormComponent]
})
export class FormModule { }
