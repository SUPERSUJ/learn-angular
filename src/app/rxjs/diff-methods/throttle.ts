import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

const source = interval(1000);

source.pipe(
  throttle(val => interval(2000)) // throttleTime(2000)
).subscribe(
  val => console.log(val)
);
