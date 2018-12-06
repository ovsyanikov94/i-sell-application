import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLotComponent } from './single-lot.component';

describe('SingleLotComponent', () => {
  let component: SingleLotComponent;
  let fixture: ComponentFixture<SingleLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
