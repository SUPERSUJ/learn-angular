import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  content: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('event: ', event);
      // 这里需要判断一下当前路由，如果不加的话，每次路由结束的时候都会执行这里的方法，这里以search组件为例
        if (event.url === '/route-reuse/parent') {
          /*在这写需要执行初始化的方法*/
          this.search();
        }
      });
  }

  search() {
    console.log('search');
  }
}
