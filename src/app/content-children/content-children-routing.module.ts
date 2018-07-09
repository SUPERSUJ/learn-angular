import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentChildrenComponent } from './content-children.component';

const routes: Routes = [
  {
    path: '',
    component: ContentChildrenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentChildrenRoutingModule { }
