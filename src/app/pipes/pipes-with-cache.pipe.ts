import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'pipesWithCache',
  pure: false,
})
export class PipesWithCachePipe implements PipeTransform {
  private cachedData: any = null;
  private page = 0;

  constructor(private http: HttpClient) {}

  transform(page: number): any {
    if (page !== this.page) {
      this.cachedData = null;
      this.page = page;
      this.http.get(`https://api.github.com/orgs/angular/members?page=${page}&per_page=5`)
        // .pipe(map(res => res.json()))
        .subscribe(data => {
          if (data) {
            this.cachedData = data;
          }
        })
    }
    return this.cachedData;
  }

}
