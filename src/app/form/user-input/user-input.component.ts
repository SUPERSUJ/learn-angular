import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  values: string = '';
  value: string = '';

  constructor() { }

  ngOnInit() {
  }

  onKey(event: KeyboardEvent) {
    this.values = (<HTMLInputElement>event.target).value;
  }
  onEnter(str: string) {
    this.value = str;
  }
  update(str: string) {
    this.value = str;
  }
}
