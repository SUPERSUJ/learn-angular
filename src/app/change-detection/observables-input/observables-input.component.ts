import { 
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
 } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables-input',
  templateUrl: './observables-input.component.html',
  styleUrls: ['./observables-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservablesInputComponent implements OnInit {
  counter: number = 0;

  @Input()
  addStream: Observable<any>;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    // timer专门取消订阅（subscription）
    let subscription = this.addStream.subscribe((n) => {
      console.log('n: ', n);
      this.counter++;
      console.log('this.counter: ', this.counter);
      // 没有调用下面这句，页面是不会更新的
      this.cdRef.markForCheck();
      if (this.counter === 5) {
        subscription.unsubscribe();
      }
    });
  }
}
