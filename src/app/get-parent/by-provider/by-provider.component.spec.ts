import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByProviderComponent } from './by-provider.component';

describe('ByProviderComponent', () => {
  let component: ByProviderComponent;
  let fixture: ComponentFixture<ByProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
