import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursiveComponent } from './recursive.component';
import { TemplateAndContainerComponent } from './template-and-container/template-and-container.component';

const routes: Routes = [
  {
    path: '',
    component: RecursiveComponent,
  },
  {
    path: 'template-and-container',
    component: TemplateAndContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursiveRoutingModule { }
