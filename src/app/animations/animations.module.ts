import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { TriggerComponent } from './trigger/trigger.component';
import { AnimationsComponent } from './animations.component';

@NgModule({
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ],
  declarations: [
    TriggerComponent,
    AnimationsComponent
  ]
})
export class AnimationsModule { }
