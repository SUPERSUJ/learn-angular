import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.css']
})
export class DoCheckComponent implements DoCheck {
  ipt: string = 'suzhijian';
  oldIpt: string = 'suzhijian';

  constructor() { }

  // 既能监听当前属性的变化，也能监听Input变化，有ngDoCheck,就不要onChanges
  ngDoCheck() {
    console.log('ngDoCheck');
    if (this.ipt !== this.oldIpt) {
      this.oldIpt = this.ipt;
      console.log('ipt change');
    }
  }

}
