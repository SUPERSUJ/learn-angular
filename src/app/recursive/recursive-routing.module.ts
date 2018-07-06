import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursiveComponent } from './recursive.component';

const routes: Routes = [
  {
    path: '',
    component: RecursiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursiveRoutingModule { }
