import { Component, Inject, forwardRef } from '@angular/core';

@Component({
  selector: 'app-inject-class',
  templateUrl: './inject-class.component.html',
  styleUrls: ['./inject-class.component.css'],
})
export class InjectClassComponent {
  name: string;

  constructor(@Inject (forwardRef(() => NameService)) nameService) {
    this.name = nameService.getName();
  }

}

export class NameService {
  getName() {
    return 'Angular';
  }
}
