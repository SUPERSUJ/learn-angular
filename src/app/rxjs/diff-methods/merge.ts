import { mapTo } from 'rxjs/operators';
import { interval, merge } from 'rxjs';

const first = interval(2500);
const second = interval(2000);
const third = interval(1500);
const fourth = interval(1000);

const example = merge(
  first.pipe(mapTo('first')),
  second.pipe(mapTo('second')),
  third.pipe(mapTo('third')),
  fourth.pipe(mapTo('fourth')),
);

// example.subscribe(val => console.log('merge: ', val));
