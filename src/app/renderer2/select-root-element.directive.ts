import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectRootElement]'
})
export class SelectRootElementDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('click')
  performTask() {
    const element = this.renderer2.selectRootElement('.myclass');
    // const child = this.renderer2.selectRootElement('.removeChild');
    // 调用selectRootElement方法后，该元素的子元素和后代元素都会没有了
    // console.log('child: ', child);
    const text = this.renderer2.createText('Namaste!!!!!');
    this.renderer2.appendChild(element, text);
  }
}
