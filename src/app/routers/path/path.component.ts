import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit, OnDestroy {
  id: string;
  sub: any;

  constructor(private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    // this.id = this._activatedRoute.snapshot.params['id'];
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
