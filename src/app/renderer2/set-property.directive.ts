import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetProperty]'
})
export class SetPropertyDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('click')
  performTask() {
    this.renderer2.setProperty(this.elementRef.nativeElement, 'id', 'szj');
    console.log(this.elementRef.nativeElement);
  }
}
