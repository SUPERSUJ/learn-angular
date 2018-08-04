import { interval, timer } from "rxjs";
import { skipUntil } from "rxjs/operators";

const source = interval(1000);

const example = source.pipe(
  skipUntil(timer(6000))
)

example.subscribe(
  val => console.log(val)
)