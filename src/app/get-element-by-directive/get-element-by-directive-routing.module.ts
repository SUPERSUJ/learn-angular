import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetElementByDirectiveComponent } from './get-element-by-directive.component';

const routes: Routes = [
  {
    path: '',
    component: GetElementByDirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetElementByDirectiveRoutingModule { }
