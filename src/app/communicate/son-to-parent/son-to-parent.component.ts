import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-son-to-parent',
  templateUrl: './son-to-parent.component.html',
  styleUrls: ['./son-to-parent.component.css']
})
export class SonToParentComponent implements OnInit {
  sonData: object = {};
  constructor() { }

  ngOnInit() {
  }

  getSonData(obj: object) {
    this.sonData = obj;
  }
}
