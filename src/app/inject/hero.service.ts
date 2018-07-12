import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeros() {
    return {
      name: 'szj',
      age: 18,
    };
  }
}
