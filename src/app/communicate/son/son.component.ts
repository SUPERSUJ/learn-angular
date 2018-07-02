import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent {
  txt1: string = '';
  txt2: string = '';

  @Output('getData')
  sendData = new EventEmitter<object>();

  sendParent() {
    this.sendData.emit({
      txt1: this.txt1,
      txt2: this.txt2,
    });
  }
}
