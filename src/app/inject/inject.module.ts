import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectRoutingModule } from './inject-routing.module';
import { InjectComponent } from './inject.component';
import { InjectClassComponent } from './inject-class/inject-class.component';
import { NameService } from './inject-class/inject-class.component';
import { UseValueComponent } from './use-value/use-value.component';
import { UseExistingComponent } from './use-existing/use-existing.component';
import { HeroService } from './hero.service';
import { UseFactoryService } from './use-factory.service';
import { UseFactoryComponent } from './use-factory/use-factory.component';

@NgModule({
  imports: [
    CommonModule,
    InjectRoutingModule
  ],
  declarations: [
    InjectComponent,
    InjectClassComponent,
    UseValueComponent,
    UseExistingComponent,
    UseFactoryComponent
  ],
  providers: [
    NameService,
    HeroService,
    UseFactoryService
  ],
})
export class InjectModule { }
