import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLotApproveComponent } from './single-lot-approve.component';

describe('SingleLotApproveComponent', () => {
  let component: SingleLotApproveComponent;
  let fixture: ComponentFixture<SingleLotApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLotApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLotApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
