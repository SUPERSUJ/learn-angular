import { Component } from '@angular/core';

import { ToggleChildBaseComponent } from '../toggle-child-base/toggle-child-base.component';

@Component({
  selector: 'app-toggle-child2',
  templateUrl: './toggle-child2.component.html',
  styleUrls: ['./toggle-child2.component.css']
})
export class ToggleChild2Component extends ToggleChildBaseComponent {
  constructor() {
    super();
    console.log('Child Component 2');
  }
}
