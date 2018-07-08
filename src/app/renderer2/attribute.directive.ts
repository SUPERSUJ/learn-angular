import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer2.setAttribute(this.elementRef.nativeElement, 'value', 'szj');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer2.removeAttribute(this.elementRef.nativeElement, 'value');
  }
}
