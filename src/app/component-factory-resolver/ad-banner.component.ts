import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
} from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';
import { Ad1Component } from './ad1.component';
import { Ad2Component } from './ad2.component';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div>
      <h3>广告</h3>
      <ng-template ad-host></ng-template>
    </div>
  `,
  // ComponentFactoryResolver必须映入动态组件
  entryComponents: [Ad1Component, Ad2Component],
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input()
  ads: AdItem[];

  // ViewChild(自定义指令)
  @ViewChild(AdDirective)
  adHost: AdDirective;

  interval: any;
  currentAdIndex = -1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}