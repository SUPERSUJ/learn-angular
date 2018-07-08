import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynaCreateComRoutingModule } from './dyna-create-com-routing.module';
import { DynaCreateComComponent } from './dyna-create-com.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    DynaCreateComRoutingModule
  ],
  declarations: [DynaCreateComComponent, AlertComponent]
})
export class DynaCreateComModule { }
