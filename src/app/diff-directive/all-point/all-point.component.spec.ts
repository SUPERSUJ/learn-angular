import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPointComponent } from './all-point.component';

describe('AllPointComponent', () => {
  let component: AllPointComponent;
  let fixture: ComponentFixture<AllPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
