import { Component, AfterContentChecked, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { TestChildComponent } from '../test-child/test-child.component';

@Component({
  selector: 'app-after-content-child',
  templateUrl: './after-content-child.component.html',
  styleUrls: ['./after-content-child.component.css']
})
export class AfterContentChildComponent implements AfterContentChecked, AfterContentInit {
  // @ContentChild(TestChildComponent, {read: ElementRef}) // 拿到元素
  @ContentChild(TestChildComponent) // 拿到组件
  contentChild: TestChildComponent;

  pervHero: string = '';

  constructor() { }

  ngAfterContentInit() {
    console.log('AfterContentInit: ', this.contentChild);
  }

  ngAfterContentChecked() {
    console.log('emit aftercontentchecked');
    if (this.pervHero !== this.contentChild.hero) {
      this.pervHero = this.contentChild.hero;
    }
  }

}
