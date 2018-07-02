import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-class',
  templateUrl: './by-class.component.html',
  styleUrls: ['./by-class.component.css']
})
export class ByClassComponent implements OnInit {
  str: string = 'parent数据';
  
  constructor() { }

  ngOnInit() {
  }

}
