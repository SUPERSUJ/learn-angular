import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  selector: 'ad2',
  template: `
    <div>
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>
      <p>{{data.bio}}</p>
      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class Ad2Component implements AdComponent {
  @Input()
  data: any;
}

