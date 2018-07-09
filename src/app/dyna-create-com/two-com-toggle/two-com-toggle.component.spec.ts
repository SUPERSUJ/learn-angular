import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoComToggleComponent } from './two-com-toggle.component';

describe('TwoComToggleComponent', () => {
  let component: TwoComToggleComponent;
  let fixture: ComponentFixture<TwoComToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoComToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoComToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
