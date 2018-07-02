import { Component, OnInit, Host, forwardRef, Inject } from '@angular/core';
import { ByProviderComponent } from '../by-provider/by-provider.component'

@Component({
  selector: 'app-by-provider-son',
  templateUrl: './by-provider-son.component.html',
  styleUrls: ['./by-provider-son.component.css'],
})
export class ByProviderSonComponent implements OnInit {
  name: string = '';

  constructor(@Host() @Inject(forwardRef(()=> ByProviderComponent)) public parent: ByProviderComponent) {
    console.log(parent)
  }

  ngOnInit() {
  }

}
