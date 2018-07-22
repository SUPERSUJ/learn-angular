import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { PowPipe } from './pow.pipe';
import { PipesWithCachePipe } from './pipes-with-cache.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PipesRoutingModule
  ],
  declarations: [PipesComponent, PowPipe, PipesWithCachePipe]
})
export class PipesModule { }
