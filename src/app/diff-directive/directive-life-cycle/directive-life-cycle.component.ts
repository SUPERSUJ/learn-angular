import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-life-cycle',
  templateUrl: './directive-life-cycle.component.html',
  styleUrls: ['./directive-life-cycle.component.css']
})
export class DirectiveLifeCycleComponent implements OnInit {
  arr: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  addArr() {
    this.arr.push(this.arr.length + 1);
  }
  removeArr() {
    this.arr.pop();
  }
}
