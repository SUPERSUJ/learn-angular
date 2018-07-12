import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectClassComponent } from './inject-class.component';

describe('InjectClassComponent', () => {
  let component: InjectClassComponent;
  let fixture: ComponentFixture<InjectClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
