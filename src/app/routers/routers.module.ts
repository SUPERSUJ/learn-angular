import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoutersRoutingModule } from './routers-routing.module';
import { RoutersComponent } from './routers.component';
import { PathComponent } from './path/path.component';
import { QueryComponent } from './query/query.component';
import { OutletsComponent } from './outlets/outlets.component';
import { FooComponent } from './outlets/foo/foo.component';
import { BarComponent } from './outlets/bar/bar.component';
import { IndexComponent } from './outlets/index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoutersRoutingModule
  ],
  declarations: [RoutersComponent, PathComponent, QueryComponent, OutletsComponent, FooComponent, BarComponent, IndexComponent]
})
export class RoutersModule { }
