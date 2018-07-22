import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { PowPipe } from './pow.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule
  ],
  declarations: [PipesComponent, PowPipe]
})
export class PipesModule { }
