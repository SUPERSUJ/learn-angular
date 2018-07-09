import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDirectiveComponent } from './tag-directive.component';

describe('TagDirectiveComponent', () => {
  let component: TagDirectiveComponent;
  let fixture: ComponentFixture<TagDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
