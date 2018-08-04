import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, of, Subject, fromEvent, interval, from, } from 'rxjs';
import { scan, map, withLatestFrom, throttleTime, multicast } from 'rxjs/operators';
import { RepoService } from './repo.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventEmitter } from 'events';

// import './diff-methods/multicast';
// import './diff-methods/tap';
// import './diff-methods/mapTo';
// import './diff-methods/timer';
// import './diff-methods/forkJoin';
// import './diff-methods/combineLatest';
// import './diff-methods/zip';
// import './diff-methods/every';
// import './diff-methods/create';
// import './diff-methods/empty';
// import './diff-methods/fromPromise';
// import './diff-methods/mergeMap';
// import './diff-methods/scan';
// import './diff-methods/reduce';
// import './diff-methods/takeUntil';
// import './diff-methods/takeWhile';
// import './diff-methods/throttle';
// import './diff-methods/merge';
// import './diff-methods/mergeAll';
// import './diff-methods/range';
// import './diff-methods/observable';
// import './diff-methods/publish';
// import './diff-methods/debounce';
// import './diff-methods/distinctUtilChanged';
// import './diff-methods/first';
// import './diff-methods/ignoreElement';
// import './diff-methods/sample';
// import './diff-methods/skip';
// import './diff-methods/skipUntil';
// import './diff-methods/retry';
// import './diff-methods/retryWhen';
// import './diff-methods/concat';
// import './diff-methods/pairwise';
// import testBuffer from './diff-methods/buffer';
// import './diff-methods/bufferCount';
// import './diff-methods/expand';
// import './diff-methods/groupBy';
// import './diff-methods/partition';
// import './diff-methods/pluck';
// import './diff-methods/switchMap';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, AfterViewInit, OnDestroy {
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
  
  @ViewChild('btn')
  btn: ElementRef;

  interval$: any;

  from$: Subject<any> = new Subject();

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
    
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        throttleTime(1000), // 点击后，1秒之内的点击无效
        scan((count) => count + 1, 0), // 类似reduce
      )
      .subscribe((count) => {
        console.log('count: ', count);
      });

    this.interval$ = interval(1000) // 从0开始，每次累加1
      .subscribe((val) => {
        // console.log('interval val: ', val);
        if (val === 5) {
          this.interval$.unsubscribe();
        }
      });
    
    // Subject 两个订阅者
    // this.from$.subscribe({
    //   next: (n) => {
    //     console.log('Subject from n: ', n);
    //   },
    // });
    // this.from$.subscribe({
    //   next: (n) => {
    //     console.log('Subject from n: ', n);
    //   },
    // });

    // from([5, 6, 7]).subscribe(this.from$);

    // let source = from([0, 9, 8]);
  }

  ngAfterViewInit() {
    let body = document.body;
    fromEvent(body, 'click')
      .pipe(
        throttleTime(2000),
        map((event: MouseEvent) => event.clientX)
      )
      .subscribe((x) => {
        console.log('clientX: ', x);
      });

    // testBuffer();
  }

  ngOnDestroy() {
  }

}
