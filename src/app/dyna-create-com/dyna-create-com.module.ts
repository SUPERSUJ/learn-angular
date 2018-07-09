import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynaCreateComRoutingModule } from './dyna-create-com-routing.module';
import { DynaCreateComComponent } from './dyna-create-com.component';
import { AlertComponent } from './alert/alert.component';
import { TwoComToggleComponent } from './two-com-toggle/two-com-toggle.component';
import { ToggleChild1Component } from './toggle-child1/toggle-child1.component';
import { ToggleChild2Component } from './toggle-child2/toggle-child2.component';
import { ToggleChildBaseComponent } from './toggle-child-base/toggle-child-base.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  imports: [
    CommonModule,
    DynaCreateComRoutingModule
  ],
  declarations: [DynaCreateComComponent, AlertComponent, TwoComToggleComponent, ToggleChild1Component, ToggleChild2Component, ToggleChildBaseComponent, ToggleComponent]
})
export class DynaCreateComModule { }
