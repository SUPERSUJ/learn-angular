import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleChild2Component } from './toggle-child2.component';

describe('ToggleChild2Component', () => {
  let component: ToggleChild2Component;
  let fixture: ComponentFixture<ToggleChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
