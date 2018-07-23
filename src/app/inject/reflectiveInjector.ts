import { Injectable, ReflectiveInjector } from '@angular/core';

@Injectable()
class Engine {}

@Injectable()
class Car {
  constructor(
    public engine: Engine
  ) {}
}

var injector = ReflectiveInjector.resolveAndCreate([Car, Engine]);
var car = injector.get(Car);

console.log('car instanceof Car', car instanceof Car);
console.log('car.engine instanceof Engine', car.engine instanceof Engine);
