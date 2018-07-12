import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  person = {
    name: 'szj',
    age: 18,
  };

  getHeros() {
    return this.person;
  }

  setName(name: string) {
    this.person.name = name;
  }
}
