import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynaCreateComComponent } from './dyna-create-com.component';

describe('DynaCreateComComponent', () => {
  let component: DynaCreateComComponent;
  let fixture: ComponentFixture<DynaCreateComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynaCreateComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynaCreateComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
