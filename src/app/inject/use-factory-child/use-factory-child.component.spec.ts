import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFactoryChildComponent } from './use-factory-child.component';

describe('UseFactoryChildComponent', () => {
  let component: UseFactoryChildComponent;
  let fixture: ComponentFixture<UseFactoryChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseFactoryChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFactoryChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
