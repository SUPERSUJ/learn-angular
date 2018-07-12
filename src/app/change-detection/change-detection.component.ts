import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import * as immutable from 'immutable';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {
  counterStream: Observable<any>;
  contactItem: any;

  constructor() {
    this.contactItem = immutable.Map({
      name: '张三',
      telNum: 123456,
    });
  }

  ngOnInit() {
    this.counterStream = timer(0, 1000);
  }

  doUpdate() {
    this.contactItem = this.contactItem.set('telNum', 6543231);
  }
}
