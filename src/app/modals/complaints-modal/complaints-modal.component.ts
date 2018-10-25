///<reference path="../../../../node_modules/@angular/core/src/di/injector.d.ts"/>
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {FeedbackModalComponent} from "../feedback-modal/feedback-modal.component";

@Component({
  selector: 'app-complaints-modal',
  templateUrl: './complaints-modal.component.html',
  styleUrls: ['./complaints-modal.component.css']
})
export class ComplaintsModalComponent implements OnInit {

  public warningMessage: string;

  constructor(public warningDialog: MatDialog, private matDialogRef: MatDialogRef<ComplaintsModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public close(){
    this.matDialogRef.close();
  }//close

  public complaintWarning(){
    this.warningMessage = "Ваша жалоба может привести к блокировке учётной записи пользователя. Вы уверены, что хотите отправить жалобу?";
    this.warningDialog.open(FeedbackModalComponent, { data: { message: this.warningMessage }});
  }//complaintWarning

}
