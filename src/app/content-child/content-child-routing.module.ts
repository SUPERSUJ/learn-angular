import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentChildComponent } from './content-child.component';

const routes: Routes = [
  {
    path: '',
    component: ContentChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentChildRoutingModule { }
