import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildrenRoutingModule } from './view-children-routing.module';
import { ViewChildrenComponent } from './view-children.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    ViewChildrenRoutingModule
  ],
  declarations: [ViewChildrenComponent, AlertComponent]
})
export class ViewChildrenModule { }
