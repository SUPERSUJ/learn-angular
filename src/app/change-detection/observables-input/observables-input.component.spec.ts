import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesInputComponent } from './observables-input.component';

describe('ObservablesInputComponent', () => {
  let component: ObservablesInputComponent;
  let fixture: ComponentFixture<ObservablesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
