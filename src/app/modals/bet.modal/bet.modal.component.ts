import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BetData } from '../../models/modal.bet/bet.data';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-bet-modal',
  templateUrl: './bet.modal.component.html',
  styleUrls: ['./bet.modal.component.css']
})
export class BetModalComponent implements OnInit {

  public betFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z]{4,20}$/i),
  ]);

  constructor(
    public dialogRef: MatDialogRef<BetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public betData: BetData
  ) {



  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  betDialog(): void {





  }//betDialog()

  ngOnInit(){

  }

}
