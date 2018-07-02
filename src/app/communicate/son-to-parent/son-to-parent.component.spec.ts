import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonToParentComponent } from './son-to-parent.component';

describe('SonToParentComponent', () => {
  let component: SonToParentComponent;
  let fixture: ComponentFixture<SonToParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonToParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
