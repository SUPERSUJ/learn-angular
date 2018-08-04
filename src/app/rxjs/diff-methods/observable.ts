import { Observable } from 'rxjs';

const hello = Observable.create(function(observer) {
  observer.next('hello');
  observer.next('world');
})
hello.subscribe(val => console.log(val));