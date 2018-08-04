import { interval } from "rxjs";
import { skip } from "rxjs/operators";

const source = interval(1000);

// source.pipe(
//   skip(5)
// ).subscribe(v => console.log(v))