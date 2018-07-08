import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-model',
  templateUrl: './my-model.component.html',
  styleUrls: ['./my-model.component.css']
})
export class MyModelComponent {
  myModelValue: string = '';

  @Input()
  get myModel() {
    return this.myModelValue;
  }
  set myModel(val: string) {
    this.myModelValue = val;
    this.myModelChange.emit(this.myModelValue);
  }

  @Output()
  myModelChange: EventEmitter<string> = new EventEmitter<string>();
}
