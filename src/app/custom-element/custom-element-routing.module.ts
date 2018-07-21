import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomElementComponent } from './custom-element.component';

const routes: Routes = [
  {
    path: '',
    component: CustomElementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomElementRoutingModule { }
