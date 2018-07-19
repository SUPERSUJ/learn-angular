import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckDifferParentComponent } from './do-check-differ-parent.component';

describe('DoCheckDifferParentComponent', () => {
  let component: DoCheckDifferParentComponent;
  let fixture: ComponentFixture<DoCheckDifferParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckDifferParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckDifferParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
