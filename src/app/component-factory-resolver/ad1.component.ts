import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  selector: 'ad1',
  template: `
    <div>
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `
})
export class Ad1Component implements AdComponent {
  @Input()
  data: any;
}

