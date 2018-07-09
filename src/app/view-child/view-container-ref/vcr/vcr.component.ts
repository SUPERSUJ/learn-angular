import { Component, AfterViewInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'vcr',
  templateUrl: './vcr.component.html',
  styleUrls: ['./vcr.component.css']
})
export class VcrComponent implements AfterViewInit {
  @ViewChild('tpl', { read: TemplateRef })
  tpl: TemplateRef<any>;

  @ViewChild('container', { read: ViewContainerRef })
  container;

  @ViewChild('content')
  content: TemplateRef<any>;

  ngAfterViewInit() {
    const commentsElem = this.content.elementRef.nativeElement;
    console.log('commentsElem: ', commentsElem);
    const embedderView = this.content.createEmbeddedView(null);
    // embedderView.rootNodes是ng-template下所有的子元素的数组
    console.log('embedderView.rootNodes', embedderView.rootNodes);
    embedderView.rootNodes.forEach((node) => {
      // commentsElem.parentNode就是<vcr></vcr>
      console.log('commentsElem.parentNode: ', commentsElem.parentNode);
      console.log('node: ', node);
      console.log('commentsElem.nextSibling: ', commentsElem.nextSibling);
      commentsElem.parentNode.insertBefore(node, commentsElem.nextSibling);
    })
    this.container.createEmbeddedView(this.tpl);
  }

}
