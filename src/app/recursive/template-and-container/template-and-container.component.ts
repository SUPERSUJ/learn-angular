import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-and-container',
  templateUrl: './template-and-container.component.html',
  styleUrls: ['./template-and-container.component.css']
})
export class TemplateAndContainerComponent implements OnInit {
  myContext = { $implicit: 'World', localSk: 'Svet' };

  constructor() { }

  ngOnInit() {
  }

}
