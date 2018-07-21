import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomElementRoutingModule } from './custom-element-routing.module';
import { CustomElementComponent } from './custom-element.component';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomElementRoutingModule
  ],
  declarations: [CustomElementComponent, PopupComponent],
  providers: [PopupService],
  entryComponents: [PopupComponent],
})
export class CustomElementModule { }
