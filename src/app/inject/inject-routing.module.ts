import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InjectComponent } from './inject.component';
import { InjectClassComponent } from './inject-class/inject-class.component';
import { UseValueComponent } from './use-value/use-value.component';
import { UseExistingComponent } from './use-existing/use-existing.component';
import { UseFactoryComponent } from './use-factory/use-factory.component';
import { MultiComponent } from './multi/multi.component';

const routes: Routes = [
  {
    path: '',
    component: InjectComponent,
    children: [
      {
        path: 'inject-class',
        component: InjectClassComponent,
      },
      {
        path: 'use-value',
        component: UseValueComponent
      },
      {
        path: 'use-existing',
        component: UseExistingComponent,
      },
      {
        path: 'use-factory',
        component: UseFactoryComponent,
      },
      {
        path: 'multi',
        component: MultiComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjectRoutingModule { }
