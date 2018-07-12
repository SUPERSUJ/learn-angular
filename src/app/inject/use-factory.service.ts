import { Injectable } from '@angular/core';

import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class UseFactoryService {

  constructor(private heroService: HeroService) {}

  getName() {
    return this.heroService.getHeros().name;
  }
}
