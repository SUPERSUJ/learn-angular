import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentFactoryResolverComponent } from './component-factory-resolver.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentFactoryResolverComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentFactoryResolverRoutingModule { }
