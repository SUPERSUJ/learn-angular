import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appWithStar]',
  exportAs: 'withStar',
})
export class WithStarDirective {
  name: string = '名字';

  @Input()
  set setName(name: string) {
    this.name = name;
  }
}
