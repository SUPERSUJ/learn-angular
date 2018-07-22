import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

const fadeIn = trigger('fadeIn', [
  state('inactive', style({ display: 'none' })),
  state('active', style({ display: '', background: 'red' })),
  transition('inactive => active', animate('1000ms ease-in')),
  transition('active => inactive', animate('1000ms ease-out')),
  transition('void => *', [ // 显示时的时候的动画
    animate(500, keyframes([
      style({ height: '0', opacity: 0, offset: 0 }), // 关键帧
      style({ height: '*', opacity: 1, offset: 1 })
    ]))
  ]),
  transition('* => void', [ // 隐藏时的时候的动画
    animate(500, keyframes([
      style({ height: '*', opacity: 1, offset: 0 }),
      style({ height: '0', opacity: 0, offset: 1 })
    ]))
  ]),
]);

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.css'],
  animations: [fadeIn]
})
export class TriggerComponent implements OnInit {
  isShow: boolean = false;
  state: string = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isShow = !this.isShow;
  }

  changeState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
  
  animationStart(arg) {
    console.log('animationStart: ', arg);
  }

  animationDone(arg) {
    console.log('animationDone: ', arg);
  }
}
