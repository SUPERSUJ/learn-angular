import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

const source = of(1, 2, 3);

source.pipe(
  reduce((p, c) => p + c) // 6
).subscribe(
  val => console.log(val)
);
