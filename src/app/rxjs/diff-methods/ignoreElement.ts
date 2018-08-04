import { interval } from "rxjs";
import { take, ignoreElements } from "rxjs/operators";

const source = interval(100);
const example = source.pipe(
  take(5),
  ignoreElements()
)

example.subscribe(() => {}, _ => {}, () => console.log('complete'));