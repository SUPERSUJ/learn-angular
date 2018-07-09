import { Component, HostBinding, OnInit } from '@angular/core';
import { SideBarService } from './side-bar.service';
@Component({
  selector: 'by-service-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @HostBinding('class.is-open')
  isOpen = false;

  constructor(private sideBarService: SideBarService) { }

  ngOnInit() {
    this.sideBarService.change.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  }

}
