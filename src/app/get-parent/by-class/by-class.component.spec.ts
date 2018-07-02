import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByClassComponent } from './by-class.component';

describe('ByClassComponent', () => {
  let component: ByClassComponent;
  let fixture: ComponentFixture<ByClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
