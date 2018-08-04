import { map, mergeAll, take } from 'rxjs/operators';
import { of, interval } from 'rxjs';

const myPromise = val => new Promise(
  resolve => setTimeout(() => resolve(`result: ${val}`), 2000)
);

const source = of(1, 2, 3);

const example = source.pipe(
  map(val => myPromise(val)),
  mergeAll() // 收集并订阅所有的 observables 。
);
example.subscribe(val => console.log('mergeAll: ', val));
