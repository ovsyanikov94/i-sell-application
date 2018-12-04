import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryConfirmComponent } from './password-recovery-confirm.component';

describe('PasswordRecoveryConfirmComponent', () => {
  let component: PasswordRecoveryConfirmComponent;
  let fixture: ComponentFixture<PasswordRecoveryConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRecoveryConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRecoveryConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
