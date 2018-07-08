import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementRefComponent } from './element-ref.component';

const routes: Routes = [
  {
    path: '',
    component: ElementRefComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementRefRoutingModule { }
