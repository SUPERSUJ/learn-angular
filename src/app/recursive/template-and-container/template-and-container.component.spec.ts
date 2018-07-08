import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAndContainerComponent } from './template-and-container.component';

describe('TemplateAndContainerComponent', () => {
  let component: TemplateAndContainerComponent;
  let fixture: ComponentFixture<TemplateAndContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAndContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAndContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
