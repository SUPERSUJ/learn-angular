import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInsertBefore]'
})
export class InsertBeforeDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('click')
  performTask() {
    const div = this.renderer2.createElement('div');
    const text = this.renderer2.createText('Hello World!');
    this.renderer2.appendChild(div, text);

    const parent = this.elementRef.nativeElement.parentNode;
    const refChild = this.elementRef.nativeElement;
    console.log(parent, refChild);
    this.renderer2.insertBefore(parent, div, refChild);
  }
}
