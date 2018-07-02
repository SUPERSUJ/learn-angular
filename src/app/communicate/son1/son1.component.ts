import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-son1',
  templateUrl: './son1.component.html',
  styleUrls: ['./son1.component.css']
})
export class Son1Component implements OnInit {
  _name: string = '';

  @Input('oneNum')
  num: number;

  @Input()
  set name(name: string) {
    this._name = name.trim() || 'no data';
  }
  get name() {
    return this._name;
  }

  constructor() { }

  ngOnInit() {
  }

}
