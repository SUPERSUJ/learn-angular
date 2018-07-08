import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
  styleUrls: ['./renderer2.component.css'],
})
export class Renderer2Component implements AfterViewInit {
  @ViewChild('a')
  private a: ElementRef;

  @ViewChild('xyz')
  private xyz: ElementRef;

  toggleFlag = false;

  constructor(private renderer2: Renderer2) { }

  addChild() {
    const li = this.renderer2.createElement('li');
    const text = this.renderer2.createText('click here to add li.');
    this.renderer2.appendChild(li, text);
    this.renderer2.appendChild(this.a.nativeElement, li);
  }

  ngAfterViewInit() {
    this.renderer2.listen(this.xyz.nativeElement, 'click', () => {
      this.toggleFlag = !this.toggleFlag;
      if (this.toggleFlag) {
        this.renderer2.setStyle(this.xyz.nativeElement, 'color', 'red');
      } else {
        this.renderer2.removeStyle(this.xyz.nativeElement, 'color');
      }
    })
  }
}
