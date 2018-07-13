import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManyRouteTabRoutingModule } from './many-route-tab-routing.module';
import { ManyRouteTabComponent } from './many-route-tab.component';

@NgModule({
  imports: [
    CommonModule,
    ManyRouteTabRoutingModule
  ],
  declarations: [ManyRouteTabComponent]
})
export class ManyRouteTabModule { }
