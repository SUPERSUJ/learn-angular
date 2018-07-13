import { Component, OnDestroy } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnDestroy {
  content: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // 当前路由缓存了，之后每次路由跳转都会触发constructor方法
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
  
  ngOnDestroy() {
    console.log('parent destory');
  }
}
