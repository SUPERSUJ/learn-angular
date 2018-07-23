import { Component, OnInit, InjectionToken, Inject, Injector } from '@angular/core';

const SOME_TOKEN = new InjectionToken('SomeToken');

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css'],
  providers: [
    {
      provide: SOME_TOKEN,
      useValue: 'one',
      multi: true,
    },
    {
      provide: SOME_TOKEN,
      useValue: 'two',
      multi: true,
    }
    // 相当于 { provide: FOO, useValue: ['one', 'two'] }
  ],
})
export class MultiComponent implements OnInit {
  other_token: any;

  constructor(@Inject(SOME_TOKEN) private some_token: any, private injector: Injector) {
    this.other_token = this.injector.get(SOME_TOKEN);
  }

  ngOnInit() {
  }

}
