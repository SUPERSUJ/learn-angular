import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynaCreateComComponent } from './dyna-create-com.component';
import { ToggleComponent } from './toggle/toggle.component';

const routes: Routes = [
  {
    path: '',
    component: DynaCreateComComponent,
    children: [
      {
        path: 'toggle',
        component: ToggleComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynaCreateComRoutingModule { }
