import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommunicateRoutingModule } from './communicate-routing.module';
import { CommunicateComponent } from './communicate.component';
import { SonToParentComponent } from './son-to-parent/son-to-parent.component';
import { SonComponent } from './son/son.component';
import { Son1Component } from './son1/son1.component';
import { ParentToSon1Component } from './parent-to-son1/parent-to-son1.component';
import { BrothersComponent } from './brothers/brothers.component';
import { SideBarComponent } from './brothers/side-bar/side-bar.component';
import { SideBarToggleComponent } from './brothers/side-bar-toggle/side-bar-toggle.component';
import { ByServiceComponent } from './by-service/by-service.component';
import { SideBarComponent as ByServiceSideBarComponent} from './by-service/side-bar/side-bar.component';
import { SideBarToggleComponent as ByServiceSideBarToggleComponent } from './by-service/side-bar-toggle/side-bar-toggle.component';

import { SideBarService } from './by-service/side-bar/side-bar.service';

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
    ParentToSon1Component,
    BrothersComponent,
    SideBarComponent,
    SideBarToggleComponent,
    ByServiceComponent,
    ByServiceSideBarComponent,
    ByServiceSideBarToggleComponent,
  ],
  providers: [SideBarService],
})
export class CommunicateModule { }
