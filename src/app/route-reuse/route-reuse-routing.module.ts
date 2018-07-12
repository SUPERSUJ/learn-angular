import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteReuseComponent} from './route-reuse.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: '',
    component: RouteReuseComponent,
    children: [
      {
        path: 'parent',
        component: ParentComponent,
        data: {
          keep: true,
        },
      },
      {
        path: 'child',
        component: ChildComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteReuseRoutingModule { }
