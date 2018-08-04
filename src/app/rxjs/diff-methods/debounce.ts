import { of, timer, interval } from "rxjs";
import { debounce } from "rxjs/operators";
console.time('time');
const example = of('wait', 'one', 'second', 'last will display', 'super', 'jian');
// const example = interval(3000);

const debounceExample = example.pipe(
  debounce(() => timer(2000))
)

debounceExample.subscribe((val) => {
  console.timeEnd('time');
  console.log(val)
});