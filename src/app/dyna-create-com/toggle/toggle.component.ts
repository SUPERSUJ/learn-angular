import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  child: string = '';
  value: string = 'default';

  constructor() { }

  ngOnInit() {
  }

  change(n: number) {
    if (n === 1) {
      this.child = 'child1';
      this.value = 'hello';
    } else if (n === 2) {
      this.child = 'child2';
      this.value = 'hi';
    }
  }

}
