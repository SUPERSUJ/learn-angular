import { of } from "rxjs";
import { expand, delay, take } from "rxjs/operators";

const source = of(2);

const example = source.pipe(
  expand(val => { // 递归调用提供的函数
    console.log('expand: ', val);
    return of(1 + val);
  }),
  take(3)
)

example.subscribe(console.log);