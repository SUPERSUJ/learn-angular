import { Injectable } from '@angular/core';

import { Ad1Component } from './ad1.component';
import { Ad2Component } from './ad2.component';
import { AdItem } from './ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  getAds() {
    return [
      new AdItem(Ad2Component, { name: 'react', bio: 'high' }),
      new AdItem(Ad2Component, { name: 'vue', bio: 'middle' }),
      new AdItem(Ad1Component, { headline: 'angular', body: '打法浩' }),
      new AdItem(Ad1Component, { headline: 'angular', body: '牛逼' }),
    ];
  }
}