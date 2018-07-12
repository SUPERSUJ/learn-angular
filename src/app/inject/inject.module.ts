import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectRoutingModule } from './inject-routing.module';
import { InjectComponent } from './inject.component';
import { InjectClassComponent } from './inject-class/inject-class.component';
import { NameService } from './inject-class/inject-class.component';
import { UseValueComponent } from './use-value/use-value.component';
import { UseExistingComponent } from './use-existing/use-existing.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    InjectRoutingModule
  ],
  declarations: [
    InjectComponent,
    InjectClassComponent,
    UseValueComponent,
    UseExistingComponent
  ],
  providers: [
    NameService,
    HeroService
  ],
})
export class InjectModule { }
