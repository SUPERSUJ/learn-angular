import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { SimpleReuseStrategy } from './simple-reuse-strategy';

import { RouteReuseRoutingModule } from './route-reuse-routing.module';
import { RouteReuseComponent } from './route-reuse.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouteReuseRoutingModule
  ],
  declarations: [RouteReuseComponent, ParentComponent, ChildComponent],
  // 这里写路由复用没有用
  // providers: [
  //   /*路由复用策略*/
  //   { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }
  // ]
})
export class RouteReuseModule { }
