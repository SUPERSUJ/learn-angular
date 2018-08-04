import { interval, fromEvent } from "rxjs";
import { buffer, take } from "rxjs/operators";

const testBuffer = () => {
  const myInterval = interval(1000);
  const bufferBy = fromEvent(document, 'click');

  const myBufferedInterval = myInterval.pipe(
    buffer(bufferBy), // 收集输出值，直到提供的 observable 发出才将收集到的值作为数组发出。
    take(3)
  )

  myBufferedInterval.subscribe(console.log);
}

export default testBuffer;