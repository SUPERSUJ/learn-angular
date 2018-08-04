import { interval } from "rxjs";
import { bufferCount, take } from "rxjs/operators";

const source = interval(1000);
const example = source.pipe(
  bufferCount(3),
  take(2)
)

example.subscribe(console.log);