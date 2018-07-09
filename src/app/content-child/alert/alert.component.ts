import { Component, ViewChild, ContentChild, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements AfterContentInit, AfterViewInit {
  @ViewChild('h3')
  h3;

  @ContentChild('insideNgContent')
  insideNgContent;

  // 先执行AfterContentInit, 再执行AfterViewInit
  ngAfterContentInit() {
    console.log('insideNgContent: ', this.insideNgContent);
  }

  ngAfterViewInit() {
    console.log('h3: ', this.h3);
  }
}
