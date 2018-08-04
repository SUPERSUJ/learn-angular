import { from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

// distinctUtilChanged.ts

const source = from([1, 2, 2, 4, 5, 3, 3, 4, 5]);

source.pipe(
  distinctUntilChanged()
).subscribe(val => {
  console.log(val)
})
