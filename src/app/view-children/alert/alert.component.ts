import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input()
  type = 'success';

  constructor() { }

  ngOnInit() {
  }

  alert() {
    console.log('alert');
  }
}