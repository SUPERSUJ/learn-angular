import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { GetElemDirective } from './get-elem.directive';

@Component({
  selector: 'app-get-element-by-directive',
  templateUrl: './get-element-by-directive.component.html',
  styleUrls: ['./get-element-by-directive.component.css']
})
export class GetElementByDirectiveComponent implements AfterViewInit {
  // ViewChildren支持指令和组件
  @ViewChildren(GetElemDirective)
  children: QueryList<GetElemDirective>

  ngAfterViewInit() {
    this.children.forEach((item) => {console.log(item)});
  }

}
