import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdd]'
})
export class AddDirective {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { 
    console.log('elementRef: ', elementRef);
  }

  @HostListener('click')
  performTask() {
    const li = this.renderer2.createElement('li');
    const text = this.renderer2.createText('click here to add li.');
    this.renderer2.appendChild(li, text);
    this.renderer2.appendChild(this.elementRef.nativeElement, li);
  }
}
