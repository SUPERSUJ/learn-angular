import { of } from "rxjs";
// import { of, concat } from "rxjs";
import { delay, concat } from "rxjs/operators";

const sourceOne = of(1, 2, 3)
const sourceTwo = of(4, 5, 6);

// const example = concat(sourceOne, sourceTwo);

// example.subscribe(val => console.log(val));

const sourceThree = sourceOne.pipe(delay(3000))
const example = sourceThree.pipe(concat(sourceTwo))

example.subscribe(val => console.log(val))