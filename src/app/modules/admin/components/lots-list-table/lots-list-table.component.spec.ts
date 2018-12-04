
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotsListTableComponent } from './lots-list-table.component';

describe('LotsListTableComponent', () => {
  let component: LotsListTableComponent;
  let fixture: ComponentFixture<LotsListTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LotsListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotsListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
