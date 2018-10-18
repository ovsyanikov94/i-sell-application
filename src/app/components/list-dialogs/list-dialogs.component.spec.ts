import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDialogsComponent } from './list-dialogs.component';

describe('ListDialogsComponent', () => {
  let component: ListDialogsComponent;
  let fixture: ComponentFixture<ListDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
