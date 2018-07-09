import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildRoutingModule } from './view-child-routing.module';
import { ViewChildComponent } from './view-child.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';
import { VcrComponent } from './view-container-ref/vcr/vcr.component';

@NgModule({
  imports: [
    CommonModule,
    ViewChildRoutingModule
  ],
  declarations: [ViewChildComponent, ViewContainerRefComponent, VcrComponent]
})
export class ViewChildModule { }
