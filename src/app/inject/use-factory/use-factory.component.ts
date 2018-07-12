import { Component, OnInit, Inject, Injector } from '@angular/core';

import { HeroService } from '../hero.service';
import { UseFactoryService } from '../use-factory.service';

const randomFactory = () => {
  return Math.random();
};

@Component({
  selector: 'app-use-factory',
  templateUrl: './use-factory.component.html',
  styleUrls: ['./use-factory.component.css'],
  providers: [
    HeroService, 
    { 
      provide: UseFactoryService,
      useFactory: (heroService) => {
        return new UseFactoryService(heroService);
      },
      deps: [HeroService]
    },
    {
      provide: 'Random',
      useFactory: randomFactory,
    }
  ]
})
export class UseFactoryComponent implements OnInit {
  name: string;
  hero: any;
  heroservice: any;

  constructor(
    @Inject(UseFactoryService) private userFactoryService,
    @Inject('Random') private random,
    private injector: Injector) {
    this.name = this.userFactoryService.getName();
    this.heroservice = this.injector.get(HeroService);
    // 当改变HeroService中的name的时候，hero也是实时刷新
    this.hero = this.heroservice.getHeros();
  }

  ngOnInit() {
  }

  changeName(name: string) {
    this.heroservice.setName(name);
  }
}
