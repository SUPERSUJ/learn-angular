import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-use-existing',
  templateUrl: './use-existing.component.html',
  styleUrls: ['./use-existing.component.css'],
  providers: [
    { provide: 'stringOrToken', useValue: 'hello angular' },
    { provide: 'otherString', useExisting: 'stringOrToken' }
  ],
})
export class UseExistingComponent implements OnInit {

  constructor(@Inject('otherString') private service: string) { }

  ngOnInit() {
    console.clear();
    console.log('service: ', this.service);
  }

}
