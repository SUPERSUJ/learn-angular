import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewChildComponent } from './view-child.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';

const routes: Routes = [
  {
    path: '',
    component: ViewChildComponent,
    children: [
      {
        path: 'view-container-ref',
        component: ViewContainerRefComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildRoutingModule { }
