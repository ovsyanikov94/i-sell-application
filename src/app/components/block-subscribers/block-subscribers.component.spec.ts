import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSubscribersComponent } from './block-subscribers.component';

describe('BlockSubscribersComponent', () => {
  let component: BlockSubscribersComponent;
  let fixture: ComponentFixture<BlockSubscribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSubscribersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
