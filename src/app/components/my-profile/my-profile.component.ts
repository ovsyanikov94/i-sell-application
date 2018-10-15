import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {FormControl, Validators} from '@angular/forms';
import {PasswordConfirmValidator} from '../../Validators/PaswordValidator';
import {MatDialog} from '@angular/material';
import {AuthModalComponent} from '../../modals/auth.modal/auth.modal.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public user: User = new User();

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

  public passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  public passwordConfirmFormControl = new FormControl('', [
    Validators.required,
    PasswordConfirmValidator( this.user )
  ]);

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
