import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeDislikeViewerModalComponent } from './like-dislike-viewer-modal.component';

describe('LikeDislikeViewerModalComponent', () => {
  let component: LikeDislikeViewerModalComponent;
  let fixture: ComponentFixture<LikeDislikeViewerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeDislikeViewerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeDislikeViewerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
