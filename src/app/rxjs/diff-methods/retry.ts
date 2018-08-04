import { interval, throwError, of } from "rxjs";
import { mergeMap, catchError, retry, } from "rxjs/operators";

const source = interval(1000)

const example = source.pipe(
  mergeMap(val => {
    if (val > 5) {
      return throwError('error');
    }
    return of(val);
  }),
  // 如果发生错误，以指定次数重试 observable 序列。
  retry(2)
)

example.subscribe(val => console.log(val))