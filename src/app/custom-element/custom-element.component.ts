import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { PopupService } from './popup.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.css'],
})
export class CustomElementComponent {

  constructor(private injector: Injector, public popup: PopupService) {
    const PopupElement = createCustomElement(PopupComponent, { injector });
    customElements.define('popup-element', PopupElement);
  }
}
