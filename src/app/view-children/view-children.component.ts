import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements AfterViewInit {
  @ViewChildren(AlertComponent)
  alerts: QueryList<AlertComponent>;

  // 拿到componenet的elementRef,elementRef.nativeElement就是真实的DOM
  @ViewChildren(AlertComponent, { read: ElementRef })
  alertsElemRef: QueryList<ElementRef>;

  @ViewChildren('div')
  divs: QueryList<any>;

  constructor() { }

  ngAfterViewInit() {
    this.alerts.forEach((item) => console.log('component: ', item));
    this.divs.forEach((item) => console.log('div: ', item));
    this.alertsElemRef.forEach((item) => console.log('alertsElemRef: ', item));
  }

}
