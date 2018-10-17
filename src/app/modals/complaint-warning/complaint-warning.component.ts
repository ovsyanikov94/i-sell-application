import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-complaint-warning',
  templateUrl: './complaint-warning.component.html',
  styleUrls: ['./complaint-warning.component.css']
})
export class ComplaintWarningComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ComplaintWarningComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public close(){
    this.matDialogRef.close();
  }//close

}
