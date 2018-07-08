import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModelRoutingModule } from './model-routing.module';
import { ModelComponent } from './model.component';
import { MyModelComponent } from './my-model/my-model.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModelRoutingModule,
    // ModelRoutingModule必须在最好
  ],
  declarations: [ModelComponent, MyModelComponent]
})
export class ModelModule { }
