import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {
  hero: string = 'suzhijian';

  constructor() { }

  ngOnInit() {
  }

}
