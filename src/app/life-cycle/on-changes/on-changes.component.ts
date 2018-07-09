import { Component, OnChanges, Input } from '@angular/core';

class Hero {
  construct
}

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges {
  @Input()
  hero: Hero;

  @Input()
  power: string;

  ngOnChanges(changes: any) {
    console.log('changes: ', changes);
    for (let propName in changes) {
      let chng = changes[propName];
      console.log('chng: ', chng);
      let curr = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log('curr: ', curr);
      console.log('prev: ', prev);
    }
  }

  reset() {
    console.log('reset');
  }
}
