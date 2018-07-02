import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToSon1Component } from './parent-to-son1.component';

describe('ParentToSon1Component', () => {
  let component: ParentToSon1Component;
  let fixture: ComponentFixture<ParentToSon1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentToSon1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToSon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
