import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.inner1,.inner2'
})
export class GetElemDirective {
  constructor(private elementRef: ElementRef) {}
}
