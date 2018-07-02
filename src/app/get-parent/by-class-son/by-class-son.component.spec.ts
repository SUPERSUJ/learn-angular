import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByClassSonComponent } from './by-class-son.component';

describe('ByClassSonComponent', () => {
  let component: ByClassSonComponent;
  let fixture: ComponentFixture<ByClassSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByClassSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByClassSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
