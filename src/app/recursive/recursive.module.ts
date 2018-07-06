import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursiveRoutingModule } from './recursive-routing.module';
import { RecursiveComponent } from './recursive.component';

@NgModule({
  imports: [
    CommonModule,
    RecursiveRoutingModule
  ],
  declarations: [RecursiveComponent]
})
export class RecursiveModule { }
