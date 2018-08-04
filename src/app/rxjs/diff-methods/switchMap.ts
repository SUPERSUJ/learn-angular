import { timer, interval } from "rxjs";
import { switchMap, take } from "rxjs/operators";

const source = timer(0, 5000);

const example = source.pipe(
  switchMap(_ => interval(500))
)

example.subscribe(console.log)