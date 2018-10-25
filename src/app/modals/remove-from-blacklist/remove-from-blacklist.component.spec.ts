import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromBlacklistComponent } from './remove-from-blacklist.component';

describe('RemoveFromBlacklistComponent', () => {
  let component: RemoveFromBlacklistComponent;
  let fixture: ComponentFixture<RemoveFromBlacklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFromBlacklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFromBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
