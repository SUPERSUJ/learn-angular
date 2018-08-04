import { race, interval } from "rxjs";
import { mapTo, take } from "rxjs/operators";

const source = race(
  interval(1000).pipe(
    mapTo('first'),
    take(3)
  ),
  interval(1500).pipe(
    mapTo('second')
  )
)

source.subscribe(console.log)