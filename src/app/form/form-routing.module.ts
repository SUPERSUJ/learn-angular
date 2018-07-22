import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form.component';
import { UserInputComponent } from './user-input/user-input.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {
        path: 'user-input',
        component: UserInputComponent,
      },
      {
        path: 'template-driven-forms',
        component: TemplateDrivenFormsComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
