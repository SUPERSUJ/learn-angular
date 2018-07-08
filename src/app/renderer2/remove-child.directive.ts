import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRemoveChild]'
})
export class RemoveChildDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }
  div = this.renderer2.createElement('div');
  text = this.renderer2.createText('Namaste!!!!!');

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer2.appendChild(this.div, this.text);
    this.renderer2.appendChild(this.elementRef.nativeElement, this.div);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer2.removeChild(this.elementRef.nativeElement, this.div)
  }

}
