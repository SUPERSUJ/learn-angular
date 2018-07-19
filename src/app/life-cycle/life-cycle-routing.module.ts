import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifeCycleComponent } from './life-cycle.component';
import { OnChangeParentComponent } from './on-change-parent/on-change-parent.component';
import { DoCheckComponent } from './do-check/do-check.component';

const routes: Routes = [
  {
    path: '',
    component: LifeCycleComponent,
    children: [
      {
        path: 'on-change-parent',
        component: OnChangeParentComponent,
      },
      {
        path: 'do-check',
        component: DoCheckComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleRoutingModule { }
