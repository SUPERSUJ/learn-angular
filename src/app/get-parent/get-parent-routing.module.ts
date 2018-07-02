import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetParentComponent } from './get-parent.component';
import { ByClassComponent } from './by-class/by-class.component';
import { ByProviderComponent } from './by-provider/by-provider.component';

const routes: Routes = [
  {
    path: '',
    component: GetParentComponent,
    children: [
      {
        path: 'by-class',
        component: ByClassComponent,
      },
      {
        path: 'by-provider',
        component: ByProviderComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetParentRoutingModule { }
