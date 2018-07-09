import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirectiveExam1Component } from './attr-directive-exam1.component';

describe('AttrDirectiveExam1Component', () => {
  let component: AttrDirectiveExam1Component;
  let fixture: ComponentFixture<AttrDirectiveExam1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrDirectiveExam1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrDirectiveExam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
