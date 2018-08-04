import { from, merge } from "rxjs";
import { partition, toArray } from "rxjs/operators";

const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9])

const [evens, odds] = partition((val: number) => {
  return val % 2 === 0;
})(source);

merge(
  evens.pipe(
    toArray()
  ),
  odds.pipe(
    toArray()
  )
).subscribe(console.log);