import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DeleteData } from '../../models/modal.data/delete.data';

@Component({
  selector: 'app-delete-role-modal',
  templateUrl: './delete-role-modal.component.html',
  styleUrls: ['./delete-role-modal.component.css']
})
export class DeleteRoleModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteRoleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public deleteData: DeleteData
  ) { }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  OkDialog():void{

    console.log(this.deleteData);

    this.dialogRef.close();
  }

}
