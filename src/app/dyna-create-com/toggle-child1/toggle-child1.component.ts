import { Component } from '@angular/core';

import { ToggleChildBaseComponent } from '../toggle-child-base/toggle-child-base.component';

@Component({
  selector: 'app-toggle-child1',
  templateUrl: './toggle-child1.component.html',
  styleUrls: ['./toggle-child1.component.css']
})
export class ToggleChild1Component extends ToggleChildBaseComponent {
  constructor() {
    super();
    console.log('Child Component 1');
  }
}
