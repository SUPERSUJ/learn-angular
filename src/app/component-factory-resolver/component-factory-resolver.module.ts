import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentFactoryResolverRoutingModule } from './component-factory-resolver-routing.module';
import { ComponentFactoryResolverComponent } from './component-factory-resolver.component';
import { Ad1Component } from './ad1.component';
import { Ad2Component } from './ad2.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
import { AdBannerComponent } from './ad-banner.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentFactoryResolverRoutingModule
  ],
  declarations: [
    ComponentFactoryResolverComponent,
    Ad1Component,
    Ad2Component,
    AdDirective,
    AdBannerComponent,
  ],
  providers: [
    AdService,
  ],
})
export class ComponentFactoryResolverModule { }
