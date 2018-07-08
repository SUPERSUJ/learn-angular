import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Renderer2RoutingModule } from './renderer2-routing.module';
import { Renderer2Component } from './renderer2.component';

import { AddDirective } from './add.directive';
import { InsertBeforeDirective } from './insert-before.directive';
import { RemoveChildDirective } from './remove-child.directive';
import { SelectRootElementDirective } from './select-root-element.directive';
import { AttributeDirective } from './attribute.directive';
import { SetPropertyDirective } from './set-property.directive';
import { ClassNameDirective } from './class-name.directive';
import { StyleDirective } from './style.directive';
import { ParentNodeDirective } from './parent-node.directive';

@NgModule({
  imports: [
    CommonModule,
    Renderer2RoutingModule
  ],
  declarations: [
    Renderer2Component,
    AddDirective,
    InsertBeforeDirective,
    RemoveChildDirective,
    SelectRootElementDirective,
    AttributeDirective,
    SetPropertyDirective,
    ClassNameDirective,
    StyleDirective,
    ParentNodeDirective,
  ]
})
export class Renderer2Module { }
