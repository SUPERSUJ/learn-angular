import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentChildRoutingModule } from './content-child-routing.module';
import { ContentChildComponent } from './content-child.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    ContentChildRoutingModule
  ],
  declarations: [ContentChildComponent, AlertComponent]
})
export class ContentChildModule { }
