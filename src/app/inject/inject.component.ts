import { Component, OnInit } from '@angular/core';
import './reflectiveInjector';

@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.css']
})
export class InjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
