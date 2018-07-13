import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  exportAs: 'highLight',
})
export class HighLightDirective {
  name: string = 'appHighLight';

  @Input()
  lastName: string;

  @Input('appMouseEnterColor')
  mouseEnterColor: string;

  constructor(private el: ElementRef, private renderer2: Renderer2) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highColor(this.mouseEnterColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highColor('black');
  }

  highColor(str: string) {
    this.renderer2.setStyle(this.el.nativeElement, 'color', str);
  }
}
