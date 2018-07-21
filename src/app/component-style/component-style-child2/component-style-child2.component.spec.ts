import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStyleChild2Component } from './component-style-child2.component';

describe('ComponentStyleChild2Component', () => {
  let component: ComponentStyleChild2Component;
  let fixture: ComponentFixture<ComponentStyleChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentStyleChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentStyleChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
