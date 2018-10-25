import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../models/user/User';

@Component({
  selector: 'app-remove-from-blacklist',
  templateUrl: './remove-from-blacklist.component.html',
  styleUrls: ['./remove-from-blacklist.component.css']
})
export class RemoveFromBlacklistComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemoveFromBlacklistComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,

  ) {

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
