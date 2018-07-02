import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Son1Component } from './son1.component';

describe('Son1Component', () => {
  let component: Son1Component;
  let fixture: ComponentFixture<Son1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Son1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Son1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
