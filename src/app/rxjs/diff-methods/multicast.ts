import { Subject, interval } from 'rxjs';
import { take, tap, multicast, mapTo } from 'rxjs/operators';

// take想要取开头n个值
const source = interval(2000).pipe(take(5));

const example = source.pipe(
  // 打印
  tap(() => console.log('Side Effect #1')),
  // mapTo将每个发出值映射成常量
  mapTo('Result!')
);

const multi = example.pipe(
  multicast(() => new Subject())
);

const subscriberOne = multi.subscribe(val => console.log(val));
const subscriberTwo = multi.subscribe(val => console.log(val));

// multi.connect();