import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-check-differ-parent',
  templateUrl: './do-check-differ-parent.component.html',
  styleUrls: ['./do-check-differ-parent.component.css']
})
export class DoCheckDifferParentComponent implements OnInit {
  note = {
    greeting: 'egghead.io',
  };
  arr: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  addKey() {
    this.arr.push(this.arr.length + 1);
  }

  removeKey() {
    this.arr.pop();
  }
}
