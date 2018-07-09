import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentChildrenRoutingModule } from './content-children-routing.module';
import { ContentChildrenComponent } from './content-children.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    ContentChildrenRoutingModule
  ],
  declarations: [ContentChildrenComponent, TabComponent, TabsComponent]
})
export class ContentChildrenModule { }
