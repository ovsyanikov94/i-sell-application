import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {FormControl, Validators} from '@angular/forms';
import {PasswordConfirmValidator} from '../../Validators/PaswordValidator';
import {MatDialog} from '@angular/material';
import {AuthModalComponent} from '../../modals/auth.modal/auth.modal.component';
import {Check} from '../../models/check/Check';
import {Lot} from '../../models/lot/Lot';
import {AuthService} from "../../services/user/auth.service";
import { AuthData} from '../../models/modal.data/auth.data';
import {ServerResponse} from "../../models/server/ServerResponse";
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public user: User = new User();

  public  balanse: number;

  public  addSumm: number;

  public checks: Check[];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  public lots: Lot[] = [
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
  ];


  public nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z а-я]{2,25}$/i),
  ]);
  public lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z а-я]{2,25}$/i),
  ]);
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/.+@.+\..+/i)
  ]);
  public phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/i )
  ]);
  public addSummFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d+/ )
  ]);

  public oldPasswordFormControl = new FormControl('', [
    Validators.required,
  ]);
  public newPasswordFormControl = new FormControl('', [
    Validators.required,
  ]);

  public newPasswordConfirmFormControl = new FormControl('', [
    Validators.required,
    PasswordConfirmValidator( this.user )
  ]);

  public avatarControl = new FormControl();

  constructor(
    public dialog: MatDialog,
    private authSersice: AuthService
  ) {
    const response = this.authSersice.getUser()
      .then(this.getUserRes.bind(this));
  }


   ngOnInit() {

    this.balanse = 1000;
    this.checks = [
      new Check('15.02.2018', 1, 250),
      new Check('15.02.2018', 2, 250),
      new Check('15.02.2018', 3, 250),
      new Check('15.02.2018', 4, 250)
    ];


  }

  checkAllFields(): boolean{

    return this.nameFormControl.valid &&
      this.lastNameFormControl.valid &&
      this.emailFormControl.valid &&
      this.phoneFormControl.valid &&
      this.oldPasswordFormControl.valid &&
      this.newPasswordFormControl.valid &&
      this.newPasswordConfirmFormControl.valid;

  }//checkAllFields

  getUserRes(response: ServerResponse){

    console.log(response);
   try {
     if ( response.status === 200){
       this.user = response.data as User;
     }
   }
   catch (ex){
     console.log( "Exception: " , ex );
   }
  }//getUserRes

  async updatePassword(){
    if ( !this.oldPasswordFormControl.valid ||
      !this.newPasswordConfirmFormControl.valid
    ){
      this.openDialog({
        message: 'некорректные значения'
      });
      return;
    }//if

    const authData: AuthData = new class implements AuthData {
      message: string;
    };
    authData.message = "Вы вошли!";

    try {

      const response = await this.authSersice.changePassword( this.user );

        this.openDialog({
          message: response.message
        });

    }
    catch (ex){
      this.openDialog({
        message: ex.error.message
      });
    }
  }
  async updateUserInfo(){

    if ( !this.nameFormControl.valid ||
      !this.lastNameFormControl.valid ||
      !this.emailFormControl.valid ||
      !this.phoneFormControl.valid
    ){
      this.openDialog({
        message: 'некорректные значения'
      });
      return;
    }//if

    const authData: AuthData = new class implements AuthData {
      message: string;
    };
    authData.message = "Вы вошли!";

    try {

      const response = await this.authSersice.changeUserInfo( this.user );
      console.log('ОТВЕТ', response)
      if ( response.status === 200){
        this.user = response.data as User;
      }
      this.openDialog({
        message: response.message
      });

    }
    catch (ex){
      this.openDialog({
        message: ex.error.message
      });
    }
  }

  openDialog( authData: AuthData ): void {

    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '400px',
      data: authData
    });

  }//openDialog

}
