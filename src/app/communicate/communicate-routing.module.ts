import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicateComponent } from './communicate.component';
import { SonToParentComponent } from './son-to-parent/son-to-parent.component';
import { ParentToSon1Component } from './parent-to-son1/parent-to-son1.component';
import { BrothersComponent } from './brothers/brothers.component';
import { ByServiceComponent } from './by-service/by-service.component';

const routes: Routes = [
  {
    path: '',
    component: CommunicateComponent,
    children: [
      {
        path: 'son-to-parent',
        component: SonToParentComponent
      },
      {
        path: 'parent-to-son',
        component: ParentToSon1Component
      },
      {
        path: 'brothers',
        component: BrothersComponent
      },
      {
        path: 'by-service',
        component: ByServiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicateRoutingModule { }
