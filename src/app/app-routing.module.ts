import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'animations',
    loadChildren: 'src/app/animations/animations.module#AnimationsModule'
  },
  {
    path: 'communicate',
    loadChildren: 'src/app/communicate/communicate.module#CommunicateModule'
  },
  {
    path: 'get-parent',
    loadChildren: 'src/app/get-parent/get-parent.module#GetParentModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
