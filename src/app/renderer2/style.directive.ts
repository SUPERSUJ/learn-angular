import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  toggleFlag = false;

  @HostListener('click')
  performTask() {
    this.toggleFlag = !this.toggleFlag;
    if (this.toggleFlag) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'blue');
      this.renderer2.setStyle(this.elementRef.nativeElement, 'font-size', '30px');
    } else {
      this.renderer2.removeStyle(this.elementRef.nativeElement, 'color');
      this.renderer2.removeStyle(this.elementRef.nativeElement, 'font-size');
    }
  }

}
