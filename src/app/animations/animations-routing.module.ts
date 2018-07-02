import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationsComponent } from './animations.component';
import { TriggerComponent } from './trigger/trigger.component';

const routes: Routes = [
  {
    path: '',
    component: AnimationsComponent,
    children: [
      {
        path: 'trigger',
        component: TriggerComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }
