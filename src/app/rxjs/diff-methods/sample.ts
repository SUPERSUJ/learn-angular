import { sample } from "rxjs/operators";
import { from, interval, zip } from "rxjs";

// zip和merge不同是merge是针对多个observe
const source = zip(
  from(['joe', 'frank', 'bob', 'flk']),
  interval(2000)
);

source.pipe(
  sample(interval(2500)) // flk已经结束了，所以取不到最后一个值
).subscribe(val => console.log(val));

// source.subscribe(val => console.log(val));