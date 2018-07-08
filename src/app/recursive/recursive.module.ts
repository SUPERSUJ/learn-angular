import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursiveRoutingModule } from './recursive-routing.module';
import { RecursiveComponent } from './recursive.component';
import { TemplateAndContainerComponent } from './template-and-container/template-and-container.component';

@NgModule({
  imports: [
    CommonModule,
    RecursiveRoutingModule
  ],
  declarations: [RecursiveComponent, TemplateAndContainerComponent]
})
export class RecursiveModule { }
