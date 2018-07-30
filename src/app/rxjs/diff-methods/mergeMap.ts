import { of } from 'rxjs/observable/of';
import { mergeMap } from 'rxjs/operators';

const source = of('Hello');
const example = source.pipe(
  // 可传多个函数进去
  mergeMap(val => of(`${val} World`))
);

example.subscribe(val => console.log(val));
