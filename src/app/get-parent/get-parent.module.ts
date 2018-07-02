import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetParentRoutingModule } from './get-parent-routing.module';
import { GetParentComponent } from './get-parent.component';
import { ByClassComponent } from './by-class/by-class.component';
import { ByProviderComponent } from './by-provider/by-provider.component';
import { ByProviderSonComponent } from './by-provider-son/by-provider-son.component';
import { ByClassSonComponent } from './by-class-son/by-class-son.component';

@NgModule({
  imports: [
    CommonModule,
    GetParentRoutingModule
  ],
  declarations: [
    GetParentComponent,
    ByClassComponent,
    ByProviderComponent,
    ByProviderSonComponent,
    ByClassSonComponent
  ],
})
export class GetParentModule { }
