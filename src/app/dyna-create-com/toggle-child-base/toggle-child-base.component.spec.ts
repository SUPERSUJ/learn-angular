import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleChildBaseComponent } from './toggle-child-base.component';

describe('ToggleChildBaseComponent', () => {
  let component: ToggleChildBaseComponent;
  let fixture: ComponentFixture<ToggleChildBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleChildBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleChildBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
