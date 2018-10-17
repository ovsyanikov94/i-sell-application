import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintWarningComponent } from './complaint-warning.component';

describe('ComplaintWarningComponent', () => {
  let component: ComplaintWarningComponent;
  let fixture: ComponentFixture<ComplaintWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
