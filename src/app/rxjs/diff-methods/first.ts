import { from } from "rxjs";
import { first } from "rxjs/operators";

const source = from([1, 2, 3]);

source.pipe(
  // first()
  first(val => val === 2)
).subscribe(val => console.log(val));