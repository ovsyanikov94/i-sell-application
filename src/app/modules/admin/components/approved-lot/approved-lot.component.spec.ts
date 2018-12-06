import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedLotComponent } from './approved-lot.component';

describe('ApprovedLotComponent', () => {
  let component: ApprovedLotComponent;
  let fixture: ComponentFixture<ApprovedLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
