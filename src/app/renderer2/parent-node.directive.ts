import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParentNode]'
})
export class ParentNodeDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('click')
  performTask() {
    const parent = this.renderer2.parentNode(this.elementRef.nativeElement);
    console.log(parent);
    this.renderer2.setStyle(parent, 'color', 'green');
  }
}
