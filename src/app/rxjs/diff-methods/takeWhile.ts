import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5, 6);
source.pipe(
  takeWhile(val => val <= 4)
).subscribe(val => console.log(val));

