import { Component, ContentChildren, QueryList, AfterContentInit, ElementRef } from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  // 组件实例
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  // 组件所有元素
  @ContentChildren(TabComponent, { read: ElementRef })
  tabsElem: QueryList<any>;

  ngAfterContentInit() {
    this.tabs.forEach((tabInstance) => console.log('tabInstance: ', tabInstance));
    this.tabsElem.forEach((tabElem) => console.log('tabElem: ', tabElem));
  }

}
