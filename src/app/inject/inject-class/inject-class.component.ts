import { Component, Inject, forwardRef } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-inject-class',
  templateUrl: './inject-class.component.html',
  styleUrls: ['./inject-class.component.css'],
})
export class InjectClassComponent {
  name: string;
  hero: any;

  constructor(@Inject (forwardRef(() => NameService)) nameService, private heroService: HeroService) {
    this.name = nameService.getName();
    this.hero = heroService.getHeros();
  }

}

export class NameService {
  getName() {
    return 'Angular';
  }
}
