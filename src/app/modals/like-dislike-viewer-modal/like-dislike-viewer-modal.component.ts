import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-like-dislike-viewer-modal',
  templateUrl: './like-dislike-viewer-modal.component.html',
  styleUrls: ['./like-dislike-viewer-modal.component.css']
})
export class LikeDislikeViewerModalComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<LikeDislikeViewerModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }//constructor

  ngOnInit() {

  }//ngOnInit

  public close(){
    this.matDialogRef.close();
  }//close

}//LikeDislikeViewerModalComponent
