import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-component-style',
  templateUrl: './component-style.component.html',
  styleUrls: ['./component-style.component.css']
})
export class ComponentStyleComponent implements OnInit {
  @HostBinding('class.component-style-active')
  active: boolean = false;

  @HostListener('click')
  click() {
    console.log(1);
  }

  constructor() { }

  ngOnInit() {
  }

  toggleActive() {
    console.log(2);
    this.active = !this.active;
  }
}
