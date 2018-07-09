import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffDirectiveComponent } from './diff-directive.component';

describe('DiffDirectiveComponent', () => {
  let component: DiffDirectiveComponent;
  let fixture: ComponentFixture<DiffDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
