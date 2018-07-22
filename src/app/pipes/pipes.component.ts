import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit, OnDestroy {
  birthday = new Date(1992, 8, 9);
  toggle = true;

  message$: Observable<string>;
  private messages = [
    'you',
    'her',
    'his',
    'I',
  ];

  constructor() {
    this.resend();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  resend() {
    this.message$ = interval(1000).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }
}
