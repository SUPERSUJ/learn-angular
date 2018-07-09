import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleChild1Component } from './toggle-child1.component';

describe('ToggleChild1Component', () => {
  let component: ToggleChild1Component;
  let fixture: ComponentFixture<ToggleChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
