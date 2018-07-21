import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appDirectiveLifeCycle]'
})
export class DirectiveLifeCycleDirective implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('创建');
  }

  ngOnDestroy() {
    console.log('销毁');
  }
}
