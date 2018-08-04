import { from } from "rxjs";
import { pluck } from "rxjs/operators";

const source = from([
  {
    name: 'su',
    age: 20
  },
  {
    name: 'hello',
    age: 80,
  },
  {
    name: 'ojbk',
    age: 10,
  }
]);

source.pipe(
  pluck('name')
).subscribe(console.log);