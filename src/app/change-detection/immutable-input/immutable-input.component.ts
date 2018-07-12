import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-immutable-input',
  templateUrl: './immutable-input.component.html',
  styleUrls: ['./immutable-input.component.css']
})
export class ImmutableInputComponent implements OnInit, OnChanges {
  @Input()
  contact: any;

  constructor() { }

  ngOnInit() {
  }

  // 组件创建，就会执行一次，每个input的都会触发一次各自的ngOnChanges
  ngOnChanges(changes: any) {
    // ngOnChanges能检测到immutable的变化
    console.log('immutable changes: ', changes);
  }

}
