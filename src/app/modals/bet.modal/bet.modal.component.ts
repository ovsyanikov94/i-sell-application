import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { BetData } from '../../models/modal.bet/bet.data';
import {FormControl, Validators} from "@angular/forms";
import {User} from "../../models/user/User";
import {AuthService} from "../../services/user/auth.service";
import {ServerResponse} from "../../models/server/ServerResponse";

@Component({
  selector: 'app-bet-modal',
  templateUrl: './bet.modal.component.html',
  styleUrls: ['./bet.modal.component.css']
})
export class BetModalComponent implements OnInit {

  public user: User = new User();
  public userCurrentBet: number;


  public betFormControl: FormControl = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<BetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public betData: BetData,

    private userService: AuthService
  ) {
    this.getUser();

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  betDialog(){

  }
  
  async getUser(){
    
    const userResponse: ServerResponse = await this.userService.getUser();

    if (userResponse.status === 200){
      this.user = userResponse.data as User;
      this.user.userCountSum = 100;

      this.betFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9\.]{1,20}$/i),
        Validators.min(this.betData.lot.currentRate),
        Validators.max(this.user.userCountSum),

      ]);
    }
  }

  ngOnInit(){

  }

}
