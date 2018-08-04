import { interval, timer } from "rxjs";
import { map, retryWhen, tap, delayWhen, take, } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(
  map(val => {
    if(val > 5){
     throw val;
    }
    return val;
  }),
  retryWhen(errors => errors.pipe(
      tap((val => console.log(`Value ${val} was too high!`))),
      delayWhen(val => timer(val * 1000)),
      take(2) // 只有两次再次重复执行
    )
  )
);

example.subscribe(val => console.log(val));