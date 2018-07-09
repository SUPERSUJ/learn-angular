import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  AfterContentInit,
  OnChanges,
} from '@angular/core';

import { ToggleChild1Component } from '../toggle-child1/toggle-child1.component';
import { ToggleChild2Component } from '../toggle-child2/toggle-child2.component';

@Component({
  selector: 'app-two-com-toggle',
  templateUrl: './two-com-toggle.component.html',
  styleUrls: ['./two-com-toggle.component.css'],
  entryComponents: [ToggleChild1Component, ToggleChild2Component],
})
export class TwoComToggleComponent implements AfterContentInit, OnChanges {
  @Input()
  child: string;
  @Input()
  value: string;

  @ViewChild('target', { read: ViewContainerRef })
  target: ViewContainerRef;

  private componentRef: ComponentRef<any>;

  private children = {
    child1: ToggleChild1Component,
    child2: ToggleChild2Component,
  };

  constructor(private compiler: ComponentFactoryResolver) { }

  renderComponent() {
    if (this.componentRef) {
      this.componentRef.instance.value = this.value;
    }
    console.log('this.componentRef: ', this.componentRef);
  }

  ngAfterContentInit() {
    let childComponent = this.children[this.child || 'child1'];
    let componentFactory = this.compiler.resolveComponentFactory(childComponent);
    this.componentRef = this.target.createComponent(componentFactory);
    this.renderComponent();
    console.log('this.componentRef: ', this.componentRef);
  }
  
  ngOnChanges(changes) {
    console.log('changes: ', changes);
    this.renderComponent();
  }
}
