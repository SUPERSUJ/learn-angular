import { take } from 'rxjs/operators';
import { interval, zip } from 'rxjs';

// 每1秒发出值
const source = interval(1000);
// 当一个 observable 完成时，便不会再发出更多的值了
const example = zip(source, source.pipe(take(2)));
// 输出: [0,0]...[1,1]
const subscribe = example.subscribe(val => console.log(val));