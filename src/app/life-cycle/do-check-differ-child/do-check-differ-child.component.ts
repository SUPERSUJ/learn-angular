import {
  Component,
  DoCheck,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  Input,
  ChangeDetectorRef,
  KeyValueDiffers,
  KeyValueDiffer
} from '@angular/core';

@Component({
  selector: 'app-do-check-differ-child',
  templateUrl: './do-check-differ-child.component.html',
  styleUrls: ['./do-check-differ-child.component.css']
})
export class DoCheckDifferChildComponent implements DoCheck {
  @ViewChild('target', { read: ViewContainerRef })
  target;

  @ViewChild('word', { read: TemplateRef })
  word;

  @Input()
  message;

  @Input()
  arr;

  messageDiffer: KeyValueDiffer<string, any>;
  arrDiffer: KeyValueDiffer<string, any>;

  constructor(
    public keyValueDiffers: KeyValueDiffers,
    public changeDetector: ChangeDetectorRef
  ) {
    this.messageDiffer = this.keyValueDiffers.find({}).create();
    this.arrDiffer = this.keyValueDiffers.find([]).create();
  }

  ngDoCheck() {
    const changes = this.messageDiffer.diff(this.message);
    const arr = this.messageDiffer.diff(this.arr);

    if (changes) {
      changes.forEachChangedItem(message => {
        console.log('forEachChangedItem message: ', message);
        this.target.createEmbeddedView(this.word, { message: message.currentValue });
      });
    }
    if (arr) {
      arr.forEachAddedItem(item => {
        console.log('forEachAddedItem item: ', item);
      });
    }
  }
}
