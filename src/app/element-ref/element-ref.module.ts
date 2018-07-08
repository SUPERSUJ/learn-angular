import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRefRoutingModule } from './element-ref-routing.module';
import { ElementRefComponent } from './element-ref.component';

@NgModule({
  imports: [
    CommonModule,
    ElementRefRoutingModule
  ],
  declarations: [ElementRefComponent]
})
export class ElementRefModule { }
