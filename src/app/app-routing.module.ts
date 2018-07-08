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
  {
    path: 'recursive',
    loadChildren: 'src/app/recursive/recursive.module#RecursiveModule'
  },
  {
    path: 'model',
    loadChildren: 'src/app/model/model.module#ModelModule'
  },
  {
    path: 'form',
    loadChildren: 'src/app/form/form.module#FormModule'
  },
  {
    path: 'element-ref',
    loadChildren: 'src/app/element-ref/element-ref.module#ElementRefModule'
  },
  {
    path: 'renderer2',
    loadChildren: 'src/app/renderer2/renderer2.module#Renderer2Module'
  },
  {
    path: 'get-element-by-directive',
    loadChildren: 'src/app/get-element-by-directive/get-element-by-directive.module#GetElementByDirectiveModule'
  },
  {
    path: 'view-children',
    loadChildren: 'src/app/view-children/view-children.module#ViewChildrenModule'
  },
  {
    path: 'dyna-create-com',
    loadChildren: 'src/app/dyna-create-com/dyna-create-com.module#DynaCreateComModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }