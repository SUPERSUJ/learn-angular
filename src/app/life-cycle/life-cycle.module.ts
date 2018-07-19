import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LifeCycleRoutingModule } from './life-cycle-routing.module';
import { LifeCycleComponent } from './life-cycle.component';
import { OnChangeParentComponent } from './on-change-parent/on-change-parent.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { DoCheckDifferParentComponent } from './do-check-differ-parent/do-check-differ-parent.component';
import { DoCheckDifferChildComponent } from './do-check-differ-child/do-check-differ-child.component';

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
    DoCheckComponent,
    DoCheckDifferParentComponent,
    DoCheckDifferChildComponent
  ]
})
export class LifeCycleModule { }
