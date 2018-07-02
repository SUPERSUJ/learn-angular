import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByProviderSonComponent } from './by-provider-son.component';

describe('ByProviderSonComponent', () => {
  let component: ByProviderSonComponent;
  let fixture: ComponentFixture<ByProviderSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByProviderSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByProviderSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
