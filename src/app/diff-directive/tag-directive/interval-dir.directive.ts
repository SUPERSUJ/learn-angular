import { Directive, EventEmitter } from '@angular/core';

@Directive({
  selector: 'interval-dir',
  outputs: ['everySecond', 'five5Secs: everyFiveSeconds']
})
export class IntervalDirDirective {
  everySecond = new EventEmitter();
  five5Secs = new EventEmitter();

  constructor() {
    setInterval(() => {
      this.everySecond.emit('1s');
    }, 1000);
    setInterval(() => {
      this.five5Secs.emit('5s');
    }, 5000);
  }

}
