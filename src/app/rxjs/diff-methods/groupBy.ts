import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

const people = [
  {
    name: 'sue',
    age: 25,
  },
  {
    name: 'jes',
    age: 25,
  },
  {
    name: 'se',
    age: 21,
  },
  {
    name: 'ojbk',
    age: 24,
  },
];

const source = from(people);

const example = source.pipe(
  groupBy(val => val.age), // 基于提供的值分组成多个 observables
  mergeMap(group => group.pipe(toArray())) // 映射成 observable 并发出值。
)

example.subscribe(console.log);