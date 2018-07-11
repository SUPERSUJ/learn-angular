import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {
  counterStream: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.counterStream = timer(0, 1000);
  }

}
