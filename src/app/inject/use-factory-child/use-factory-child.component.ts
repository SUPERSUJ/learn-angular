import { Component, OnInit, Inject } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-use-factory-child',
  templateUrl: './use-factory-child.component.html',
  styleUrls: ['./use-factory-child.component.css']
})
export class UseFactoryChildComponent implements OnInit {
  name: string;

  constructor(@Inject(HeroService) private heroService) {
    this.name = this.heroService.getHeros().name;
  }

  ngOnInit() {
  }

  getName() {
    this.name = this.heroService.getHeros().name;
  }
}
