import { takeUntil } from 'rxjs/operators';
import { interval, timer } from 'rxjs';

const source = interval(1000);
const setTimer = timer(5000);

source.pipe(
  takeUntil(setTimer)
).subscribe(
  val => console.log(val)
)
