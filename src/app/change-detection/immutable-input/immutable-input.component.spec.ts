import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmutableInputComponent } from './immutable-input.component';

describe('ImmutableInputComponent', () => {
  let component: ImmutableInputComponent;
  let fixture: ComponentFixture<ImmutableInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmutableInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmutableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
