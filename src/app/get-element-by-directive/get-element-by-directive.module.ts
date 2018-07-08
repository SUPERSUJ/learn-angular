import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetElementByDirectiveRoutingModule } from './get-element-by-directive-routing.module';
import { GetElementByDirectiveComponent } from './get-element-by-directive.component';
import { GetElemDirective } from './get-elem.directive';

@NgModule({
  imports: [
    CommonModule,
    GetElementByDirectiveRoutingModule
  ],
  declarations: [
    GetElementByDirectiveComponent,
    GetElemDirective,
  ]
})
export class GetElementByDirectiveModule { }
