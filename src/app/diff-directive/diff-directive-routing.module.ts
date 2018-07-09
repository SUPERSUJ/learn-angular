import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiffDirectiveComponent } from './diff-directive.component';
import { AttrDirectiveExam1Component } from './attr-directive-exam1/attr-directive-exam1.component';
import { TagDirectiveComponent } from './tag-directive/tag-directive.component';

const routes: Routes = [
  {
    path: '',
    component: DiffDirectiveComponent,
    children: [
      {
        path: 'attr-directive-exam1',
        component: AttrDirectiveExam1Component
      },
      {
        path: 'tag-directive',
        component: TagDirectiveComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiffDirectiveRoutingModule { }
