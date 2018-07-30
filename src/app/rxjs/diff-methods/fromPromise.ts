import { of, from } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';

// rxjs6没有fromPromist，改用from

// 基于输入来决定是 resolve 还是 reject 的示例 promise
const myPromise = willReject => {
  return new Promise((resolve, reject) => {
    if (willReject) {
      reject('Rejected!');
    }
    resolve('Resolved!');
  });
};
// 先发出 true，然后是 false
const source = of(true, false);
const example = source.pipe(
  mergeMap(val =>
    from(myPromise(val)).pipe(
      // 捕获并优雅地处理 reject 的结果
      catchError(error => of(`Error: ${error}`))
    )
  )
);
// 输出: 'Error: Rejected!', 'Resolved!'
example.subscribe(val => console.log(val));