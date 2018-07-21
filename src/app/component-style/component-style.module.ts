import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentStyleRoutingModule } from './component-style-routing.module';
import { ComponentStyleComponent } from './component-style.component';
import { ComponentStyleChildComponent } from './component-style-child/component-style-child.component';
import { ComponentStyleChild2Component } from './component-style-child2/component-style-child2.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentStyleRoutingModule
  ],
  declarations: [ComponentStyleComponent, ComponentStyleChildComponent, ComponentStyleChild2Component]
})
export class ComponentStyleModule { }
