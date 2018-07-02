import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-son1',
  templateUrl: './parent-to-son1.component.html',
  styleUrls: ['./parent-to-son1.component.css']
})
export class ParentToSon1Component implements OnInit {
  num: any = '';

  constructor() { }

  ngOnInit() {
  }
}
