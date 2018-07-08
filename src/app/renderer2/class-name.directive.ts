import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClassName]'
})
export class ClassNameDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer2.addClass(this.elementRef.nativeElement, 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer2.removeClass(this.elementRef.nativeElement, 'red');
  }
}
