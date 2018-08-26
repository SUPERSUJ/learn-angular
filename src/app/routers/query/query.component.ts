import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit, OnDestroy {
  params: string ='';
  sub: any;

  constructor(private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this._activatedRoute.queryParams.subscribe(params => {
      this.params = params.params;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
