import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './ad-item';

@Component({
  selector: 'app-component-factory-resolver',
  templateUrl: './component-factory-resolver.component.html',
  styleUrls: ['./component-factory-resolver.component.css']
})
export class ComponentFactoryResolverComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
