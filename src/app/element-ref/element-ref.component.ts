import { Component, ViewChild, AfterViewInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.css']
})
export class ElementRefComponent implements AfterViewInit {
  name: string = 'SZJ';

  @ViewChild('greet')
  geetDiv: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.geetDiv.nativeElement, 'backgroundColor', 'red');
  }
}
