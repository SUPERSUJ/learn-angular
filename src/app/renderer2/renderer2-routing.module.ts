import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Renderer2Component } from './renderer2.component';

const routes: Routes = [
  {
    path: '',
    component: Renderer2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Renderer2RoutingModule { }
