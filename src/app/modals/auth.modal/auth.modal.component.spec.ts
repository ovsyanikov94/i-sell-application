import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth.ModalComponent } from './auth.modal.component';

describe('Auth.ModalComponent', () => {
  let component: Auth.ModalComponent;
  let fixture: ComponentFixture<Auth.ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth.ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth.ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
