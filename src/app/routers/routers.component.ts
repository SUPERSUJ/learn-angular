import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.css']
})
export class RoutersComponent implements OnInit {
  id: string = '1';
  params: string = 'hello';

  constructor(private _router: Router) {
    
  }

  toPathByNavigate() {
    this._router.navigate(['/routers/path', this.id]);
  }

  toPathByNavigateByUrl() {
    this._router.navigateByUrl(`/routers/path/${this.id}`);
  }

  toQueryByNavigate() {
    this._router.navigate(['/routers/query'], { queryParams: { params: this.params}});
  }

  toQueryByNavigateByUrl() {
    this._router.navigateByUrl(`/routers/query?params=${this.params}`);
  }

  ngOnInit() {
  }

}
