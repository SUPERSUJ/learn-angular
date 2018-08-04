import { interval } from "rxjs";
import { pairwise, take } from "rxjs/operators";

interval(1000).pipe(
  pairwise(), // 将前一个值和当前值作为数组发出
  take(5),
).subscribe(val => console.log(val))