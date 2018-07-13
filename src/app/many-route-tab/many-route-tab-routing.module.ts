import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManyRouteTabComponent } from './many-route-tab.component';

const routes: Routes = [
  {
    path: '',
    component: ManyRouteTabComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManyRouteTabRoutingModule { }
