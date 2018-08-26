import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutersComponent } from './routers.component';
import { PathComponent } from './path/path.component';
import { QueryComponent } from './query/query.component';
import { OutletsComponent } from './outlets/outlets.component';
import { BarComponent } from './outlets/bar/bar.component';
import { FooComponent } from './outlets/foo/foo.component';
import { IndexComponent } from './outlets/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: RoutersComponent,
    children: [
      {
        path: 'path/:id',
        component: PathComponent,
      },
      {
        path: 'query',
        component: QueryComponent,
      },
      {
        path: 'outlets',
        component: OutletsComponent,
        children: [
          {
            path: '',
            component: IndexComponent,
          },
          {
            path: 'foo',
            component: FooComponent,
            outlet: 'aux',
          },
          {
            path: 'bar',
            component: BarComponent,
            outlet: 'aux',
          }
        ],
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutersRoutingModule { }
