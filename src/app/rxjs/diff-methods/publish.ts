import { interval } from "rxjs";
import { tap, publish } from "rxjs/operators";


const source = interval(1000);
const example = source.pipe(
  tap(_ => console.log('---- start ----')),
  publish()
)

example.subscribe(val => {
  console.log('1: ', val)
});

example.subscribe(val => {
  console.log('2: ', val)
})

// window.setTimeout(() => {
//   example.connect();
// }, 4000);