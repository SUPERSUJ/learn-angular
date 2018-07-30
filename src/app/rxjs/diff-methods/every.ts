import { of } from 'rxjs';
import { every } from 'rxjs/operators';

// 发出5个值
const allEvens = of(2, 4, 6, 8, 10);
const example = allEvens.pipe(
  // 每个值都是偶数吗？
  every(val => val % 2 === 0)
);
// 输出: true
const subscribe = example.subscribe(val => console.log(val));