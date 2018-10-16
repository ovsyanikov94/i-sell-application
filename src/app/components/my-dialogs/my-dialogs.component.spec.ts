import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogsComponent } from './my-dialogs.component';

describe('MyDialogsComponent', () => {
  let component: MyDialogsComponent;
  let fixture: ComponentFixture<MyDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
