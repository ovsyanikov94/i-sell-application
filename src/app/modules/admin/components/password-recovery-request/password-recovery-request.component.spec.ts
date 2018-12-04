import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryRequestComponent } from './password-recovery-request.component';

describe('PasswordRecoveryRequestComponent', () => {
  let component: PasswordRecoveryRequestComponent;
  let fixture: ComponentFixture<PasswordRecoveryRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRecoveryRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRecoveryRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
