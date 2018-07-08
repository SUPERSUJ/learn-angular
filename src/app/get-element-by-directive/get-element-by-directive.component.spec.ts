import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetElementByDirectiveComponent } from './get-element-by-directive.component';

describe('GetElementByDirectiveComponent', () => {
  let component: GetElementByDirectiveComponent;
  let fixture: ComponentFixture<GetElementByDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetElementByDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetElementByDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
