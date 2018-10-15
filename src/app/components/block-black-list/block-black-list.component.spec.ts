import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBlackListComponent } from './block-black-list.component';

describe('BlockBlackListComponent', () => {
  let component: BlockBlackListComponent;
  let fixture: ComponentFixture<BlockBlackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBlackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBlackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
