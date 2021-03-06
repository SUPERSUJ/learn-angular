import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// selector的属性名必须与Input set 的属性名相同
@Directive({
  selector: '[appStructDirective]'
})
export class StructDirectiveDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.clear();
    console.log('templateRef: ', this.templateRef);
    console.log('viewContainer: ', this.viewContainer);
  }

  @Input()
  set appStructDirective(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
