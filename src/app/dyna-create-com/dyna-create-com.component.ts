import { 
  Component,
  ComponentFactory,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  OnDestroy
} from '@angular/core';

import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-dyna-create-com',
  templateUrl: './dyna-create-com.component.html',
  styleUrls: ['./dyna-create-com.component.css'],
  entryComponents: [AlertComponent],
})
export class DynaCreateComComponent implements OnDestroy {
  @ViewChild('alertContainer', { read: ViewContainerRef })
  container;

  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  createComponent(type) {
    console.log('this.container: ', this.container);
    // 销毁原来的
    this.container.clear();
    // 每次创建新的
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);
    console.log('this.componentRef: ', this.componentRef);
    console.log('this.componentRef.instance: ', this.componentRef.instance);
    this.componentRef.instance.type = type;
    this.componentRef.instance.output.subscribe(event => console.log(event));
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
