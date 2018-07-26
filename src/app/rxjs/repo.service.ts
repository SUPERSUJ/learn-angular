import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private _http: Http) {}

  getReposForUser(user: string): Observable<any> {
    return this._http
            .get(`https://api.github.com/users/${user}/repos`)
            .pipe(
              map((res: any) => res.json()),
              share(),
            );
  }
}
