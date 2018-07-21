import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentStyleComponent } from './component-style.component'; 

const routes: Routes = [
  {
    path: '',
    component: ComponentStyleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentStyleRoutingModule { }
