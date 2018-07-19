import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LifeCycleRoutingModule } from './life-cycle-routing.module';
import { LifeCycleComponent } from './life-cycle.component';
import { OnChangeParentComponent } from './on-change-parent/on-change-parent.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { DoCheckComponent } from './do-check/do-check.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LifeCycleRoutingModule
  ],
  declarations: [
    LifeCycleComponent,
    OnChangeParentComponent,
    OnChangesComponent,
    DoCheckComponent
  ]
})
export class LifeCycleModule { }
