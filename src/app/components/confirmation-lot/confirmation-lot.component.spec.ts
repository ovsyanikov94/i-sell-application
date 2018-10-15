import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationLotComponent } from './confirmation-lot.component';

describe('ConfirmationLotComponent', () => {
  let component: ConfirmationLotComponent;
  let fixture: ComponentFixture<ConfirmationLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
