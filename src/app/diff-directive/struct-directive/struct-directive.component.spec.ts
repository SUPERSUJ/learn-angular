import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirectiveComponent } from './struct-directive.component';

describe('StructDirectiveComponent', () => {
  let component: StructDirectiveComponent;
  let fixture: ComponentFixture<StructDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
