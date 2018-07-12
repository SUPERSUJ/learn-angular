import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-use-value',
  templateUrl: './use-value.component.html',
  styleUrls: ['./use-value.component.css'],
  providers: [{ provide: 'stringOrToken', useValue: 'hello world' }],
})
export class UseValueComponent implements OnInit {

  constructor(@Inject('stringOrToken') private service: string) { }

  ngOnInit() {
    console.clear();
    console.log('stringOrToken: ', this.service);
  }
}
