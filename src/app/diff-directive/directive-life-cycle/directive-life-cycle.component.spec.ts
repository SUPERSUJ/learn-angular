import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveLifeCycleComponent } from './directive-life-cycle.component';

describe('DirectiveLifeCycleComponent', () => {
  let component: DirectiveLifeCycleComponent;
  let fixture: ComponentFixture<DirectiveLifeCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveLifeCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
