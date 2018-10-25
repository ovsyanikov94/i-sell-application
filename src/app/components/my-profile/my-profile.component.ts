import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {FormControl, Validators} from '@angular/forms';
import {PasswordConfirmValidator} from '../../Validators/PaswordValidator';
import {MatDialog} from '@angular/material';
import {AuthModalComponent} from '../../modals/auth.modal/auth.modal.component';
import {Check} from '../../models/check/Check';
import {Lot} from '../../models/lot/Lot';

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
  public loginFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z]{4,20}$/i),
  ]);
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/.+@.+\..+/i)
  ]);
  public phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^((\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ )
  ]);
  public addSummFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d+/ )
  ]);

  public passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  public passwordConfirmFormControl = new FormControl('', [
    Validators.required,
    PasswordConfirmValidator( this.user )
  ]);

  public avatarControl = new FormControl();

  constructor(
    private registrationDialog: MatDialog
  ) { }

  save(){

  }

  openDialog( msg: string ){

    this.registrationDialog.open( AuthModalComponent , {
      data: {
        message: msg
      }
    });

  }//openDialog

  ngOnInit() {

    this.user.userName = 'Алексей';
    this.user.userLastname = 'Фамилия';
    this.user.userPhone = '+3809238130';
    this.user.userLogin = 'Alex';
    this.user.userEmail = 'alex@gmail.com';
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
      this.loginFormControl.valid &&
      this.emailFormControl.valid &&
      this.phoneFormControl.valid &&
      this.passwordFormControl.valid &&
      this.passwordConfirmFormControl.valid;

  }//checkAllFields

}
