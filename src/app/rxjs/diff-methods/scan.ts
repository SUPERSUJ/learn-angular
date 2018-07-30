import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

const source = of(1, 2, 3);

source.pipe(
  scan((p, c) => p + c) // 1 -> 3 -> 6，不同于reduce一次把结果6输出
).subscribe(
  val => console.log(val)
);
