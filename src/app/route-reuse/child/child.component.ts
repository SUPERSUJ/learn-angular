import { Component, OnInit, Inject } from '@angular/core';

import { SimpleReuseStrategy } from '../simple-reuse-strategy';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [SimpleReuseStrategy]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteReuseRoute() {
    SimpleReuseStrategy.deleteRouteSnapshot('parent');
  }
}
