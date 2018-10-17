///<reference path="../../../../node_modules/@angular/core/src/di/injector.d.ts"/>
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-complaints-modal',
  templateUrl: './complaints-modal.component.html',
  styleUrls: ['./complaints-modal.component.css']
})
export class ComplaintsModalComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ComplaintsModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public close(){
    this.matDialogRef.close();
  }//close

}
