import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynaCreateComComponent } from './dyna-create-com.component';

const routes: Routes = [
  {
    path: '',
    component: DynaCreateComComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynaCreateComRoutingModule { }
