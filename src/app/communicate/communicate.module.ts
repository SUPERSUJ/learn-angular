import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommunicateRoutingModule } from './communicate-routing.module';
import { CommunicateComponent } from './communicate.component';
import { SonToParentComponent } from './son-to-parent/son-to-parent.component';
import { SonComponent } from './son/son.component';
import { Son1Component } from './son1/son1.component';
import { ParentToSon1Component } from './parent-to-son1/parent-to-son1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommunicateRoutingModule
  ],
  declarations: [
    CommunicateComponent,
    SonToParentComponent,
    SonComponent,
    Son1Component,
    ParentToSon1Component
  ]
})
export class CommunicateModule { }
