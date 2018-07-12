import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'button[appBtn]',
  host: {
    '(click)': 'onClick($event.target)',
  },
})
export class BtnDirective {
  numberOfClicks = 0;
  // 设置属性
  @HostBinding('attr.role')
  role = 'button';
  // 设置css类
  @HostBinding('class.red')
  red = true;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  // 依然有事件冒泡
  @HostListener('document:click', ['$event'])
  docClick(btn: Event) {
    console.log('document: ', btn);
    // 事件里面都有event
    console.log('event.target: ', event.target);
    console.log('this.el.nativeElement: ', this.el.nativeElement);
    console.log('this.el.nativeElemetn.contains(event.target): ', this.el.nativeElement.contains(event.target));
    // contains可以包含自己
    if (this.el.nativeElement.contains(event.target)) {
      this.highLight('yellow');
    } else {
      this.highLight(null);
    }
  }

  highLight(str: any) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', str || 'white');
  }

  onClick(btn: HTMLElement) {
    console.log('onClick btn: ', btn);
    this.numberOfClicks++;
  }

  @HostListener('mouseenter', ['$event.target'])
  onmouseenter(elem: HTMLElement) {
    console.log('mouseEnter: ', elem);
    console.log('mouseenter event: ', event);
  }
}
