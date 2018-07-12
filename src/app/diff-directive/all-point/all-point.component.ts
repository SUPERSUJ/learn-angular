import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-point',
  templateUrl: './all-point.component.html',
  styleUrls: ['./all-point.component.css']
})
export class AllPointComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testEventArg() {
    console.log('testEventArg event: ', event);
  }
}
