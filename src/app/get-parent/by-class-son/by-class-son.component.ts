import { Component, OnInit } from '@angular/core';
import { ByClassComponent } from '../by-class/by-class.component';

@Component({
  selector: 'app-by-class-son',
  templateUrl: './by-class-son.component.html',
  styleUrls: ['./by-class-son.component.css']
})
export class ByClassSonComponent implements OnInit {

  constructor(public parent: ByClassComponent) { }

  ngOnInit() {
  }

}
