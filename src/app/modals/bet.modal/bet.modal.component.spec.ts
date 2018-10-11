import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BetModalComponent } from './bet.modal.component';

describe('BetModalComponent', () => {
  let component: BetModalComponent;
  let fixture: ComponentFixture<BetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetModalComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
