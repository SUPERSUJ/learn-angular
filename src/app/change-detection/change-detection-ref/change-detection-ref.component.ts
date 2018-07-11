import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-change-detection-ref',
  templateUrl: './change-detection-ref.component.html',
  styleUrls: ['./change-detection-ref.component.css']
})
export class ChangeDetectionRefComponent implements OnInit, OnDestroy {
  counter: number = 0;
  timerId: any;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.timerId = window.setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnDestroy() {
    window.clearInterval(this.timerId);
  }

  detachCD(checked: boolean) {
    if (checked) {
      this.cdRef.detach();
    } else {
      this.cdRef.reattach();
    }
  }
}
