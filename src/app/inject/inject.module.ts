import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InjectRoutingModule } from './inject-routing.module';
import { InjectComponent } from './inject.component';
import { InjectClassComponent } from './inject-class/inject-class.component';
import { NameService } from './inject-class/inject-class.component';
import { UseValueComponent } from './use-value/use-value.component';
import { UseExistingComponent } from './use-existing/use-existing.component';
// import { HeroService } from './hero.service';
import { UseFactoryService } from './use-factory.service';
import { UseFactoryComponent } from './use-factory/use-factory.component';
import { UseFactoryChildComponent } from './use-factory-child/use-factory-child.component';
import { MultiComponent } from './multi/multi.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InjectRoutingModule
  ],
  declarations: [
    InjectComponent,
    InjectClassComponent,
    UseValueComponent,
    UseExistingComponent,
    UseFactoryComponent,
    UseFactoryChildComponent,
    MultiComponent
  ],
  providers: [
    NameService,
    // @Component的元数据有了providers： [HeroService],就可以不用再这里写
    // HeroService,
    UseFactoryService
  ],
})
export class InjectModule { }
