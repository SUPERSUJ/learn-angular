import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { RepoService } from './repo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RxjsRoutingModule
  ],
  declarations: [RxjsComponent],
  providers: [
    RepoService,
  ],
})
export class RxjsModule { }
