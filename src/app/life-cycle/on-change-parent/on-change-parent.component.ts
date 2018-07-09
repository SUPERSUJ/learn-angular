import { Component, ViewChild } from '@angular/core';
import { OnChangesComponent } from '../on-changes/on-changes.component';

class Hero {
  constructor(public name: string) {}
}

@Component({
  selector: 'app-on-change-parent',
  templateUrl: './on-change-parent.component.html',
  styleUrls: ['./on-change-parent.component.css']
})
export class OnChangeParentComponent {
  // OnChange是不会监听到的对象，初始化的时候，才执行一次
  hero: Hero;
  power: string;

  @ViewChild(OnChangesComponent)
  onChangesCom: OnChangeParentComponent;

  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('superMan');
    this.power = 'hi';
    if (this.onChangesCom) {
      this.onChangesCom.reset();
    }
  }
}
