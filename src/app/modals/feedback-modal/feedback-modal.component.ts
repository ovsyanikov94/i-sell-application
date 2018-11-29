import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css']
})
export class FeedbackModalComponent implements OnInit {

  feedBackRating: number;
  ratings: number[] = [1, 2, 3, 4, 5];

  constructor(private matDialogRef: MatDialogRef<FeedbackModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }//ngOnInit

  public close(){
    this.matDialogRef.close();
  }//close

}//FeedbackModalComponent
