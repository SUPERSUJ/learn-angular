import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection.component';
import { ObservablesInputComponent } from './observables-input/observables-input.component';
import { ChangeDetectionRefComponent } from './change-detection-ref/change-detection-ref.component';
import { ImmutableInputComponent } from './immutable-input/immutable-input.component';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule
  ],
  declarations: [ChangeDetectionComponent, ObservablesInputComponent, ChangeDetectionRefComponent, ImmutableInputComponent]
})
export class ChangeDetectionModule { }
