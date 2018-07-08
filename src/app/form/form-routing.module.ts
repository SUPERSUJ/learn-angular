import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form.component';
import { UserInputComponent } from './user-input/user-input.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {
        path: 'user-input',
        component: UserInputComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
