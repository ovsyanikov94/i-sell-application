import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectLotComponent } from './reject-lot.component';

describe('RejectLotComponent', () => {
  let component: RejectLotComponent;
  let fixture: ComponentFixture<RejectLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
