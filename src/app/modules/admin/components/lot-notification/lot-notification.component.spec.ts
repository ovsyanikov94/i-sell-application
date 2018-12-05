import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotNotificationComponent } from './lot-notification.component';

describe('LotNotificationComponent', () => {
  let component: LotNotificationComponent;
  let fixture: ComponentFixture<LotNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
