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
  {
    path: 'content-child',
    loadChildren: 'src/app/content-child/content-child.module#ContentChildModule'
  },
  {
    path: 'content-children',
    loadChildren: 'src/app/content-children/content-children.module#ContentChildrenModule'
  },
  {
    path: 'view-child',
    loadChildren: 'src/app/view-child/view-child.module#ViewChildModule'
  },
  {
    path: 'life-cycle',
    loadChildren: 'src/app/life-cycle/life-cycle.module#LifeCycleModule'
  },
  {
    path: 'diff-directive',
    loadChildren: 'src/app/diff-directive/diff-directive.module#DiffDirectiveModule'
  },
  {
    path: 'change-detection',
    loadChildren: 'src/app/change-detection/change-detection.module#ChangeDetectionModule'
  },
  {
    path: 'inject',
    loadChildren: 'src/app/inject/inject.module#InjectModule'
  },
  {
    path: 'route-reuse',
    loadChildren: 'src/app/route-reuse/route-reuse.module#RouteReuseModule'
  },
  {
    path: 'many-route-tab',
    loadChildren: 'src/app/many-route-tab/many-route-tab.module#ManyRouteTabModule'
  },
  {
    path: 'component-factory-resolver',
    loadChildren: 'src/app/component-factory-resolver/component-factory-resolver.module#ComponentFactoryResolverModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
