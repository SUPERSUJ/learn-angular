import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

const source = interval(1000);

source.pipe(
  throttle(val => interval(2000)) // 节流，类似throttleTime(2000)
).subscribe(
  val => console.log(val)
);
