import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyRouteTabComponent } from './many-route-tab.component';

describe('ManyRouteTabComponent', () => {
  let component: ManyRouteTabComponent;
  let fixture: ComponentFixture<ManyRouteTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManyRouteTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyRouteTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
