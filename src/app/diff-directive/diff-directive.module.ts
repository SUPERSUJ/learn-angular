import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiffDirectiveRoutingModule } from './diff-directive-routing.module';
import { DiffDirectiveComponent } from './diff-directive.component';
import { AttrDirectiveExam1Component } from './attr-directive-exam1/attr-directive-exam1.component';
import { HighLightDirective } from './attr-directive-exam1/high-light.directive';
import { TagDirectiveComponent } from './tag-directive/tag-directive.component';
import { IntervalDirDirective } from './tag-directive/interval-dir.directive';
import { BtnDirective } from './all-point/btn.directive';
import { AllPointComponent } from './all-point/all-point.component';
import { StructDirectiveComponent } from './struct-directive/struct-directive.component';
import { StructDirectiveDirective } from './struct-directive/struct-directive.directive';

@NgModule({
  imports: [
    CommonModule,
    DiffDirectiveRoutingModule
  ],
  declarations: [
    DiffDirectiveComponent,
    AttrDirectiveExam1Component,
    HighLightDirective,
    TagDirectiveComponent,
    IntervalDirDirective,
    BtnDirective,
    AllPointComponent,
    StructDirectiveDirective,
    StructDirectiveComponent,
  ]
})
export class DiffDirectiveModule { }
