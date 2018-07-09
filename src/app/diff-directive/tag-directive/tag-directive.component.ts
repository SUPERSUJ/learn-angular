import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-directive',
  templateUrl: './tag-directive.component.html',
  styleUrls: ['./tag-directive.component.css']
})
export class TagDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  everySecond() {
    console.log('1s');
  }

  everyFiveSeconds() {
    console.log('5s');
  }
}
