import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, } from 'rxjs';
import { scan, map, withLatestFrom } from 'rxjs/operators';
import { RepoService } from './repo.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  ofItems = of([1, 2, 3, 4]);
  repos: Observable<any>;
  counter$: Observable<string> = new Subject<number>()
    .pipe(
      scan((acc: number, curr: number) => {
        console.log('acc: ', acc); // 之前的总和
        return acc + curr;
      }),
      map((value: number): string => `sum: ${value}`)
    );

    loginForm: FormGroup;
    private submit$: Observable<any> = new Subject();

  constructor(
    private repoService: RepoService,
    private formBuilder: FormBuilder,
  ) {
    this.repos = this.repoService.getReposForUser('auth0');
    // repo.service 使用了share就只有一个请求
    this.repos.subscribe((data) => console.log(1, data));
    this.repos.subscribe((data) => console.log(2, data));
    this.counter$.subscribe(console.log.bind(console));
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: '',
      password: '',
    });

    this.submit$
      .pipe(
        withLatestFrom(this.loginForm.valueChanges, (_, value) => value)
      )
      .subscribe((values) => {
        console.log('values: ', values);
      });
  }

}
