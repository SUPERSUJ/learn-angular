import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckDifferChildComponent } from './do-check-differ-child.component';

describe('DoCheckDifferChildComponent', () => {
  let component: DoCheckDifferChildComponent;
  let fixture: ComponentFixture<DoCheckDifferChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckDifferChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckDifferChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
