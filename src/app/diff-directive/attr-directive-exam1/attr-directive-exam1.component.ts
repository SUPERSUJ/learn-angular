import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directive-exam1',
  templateUrl: './attr-directive-exam1.component.html',
  styleUrls: ['./attr-directive-exam1.component.css']
})
export class AttrDirectiveExam1Component implements OnInit {
  name: string = '杰克逊';

  constructor() { }

  ngOnInit() {
  }

  changeName() {
    this.name = '麦克';
  }
}
