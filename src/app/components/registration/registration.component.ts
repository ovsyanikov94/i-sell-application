import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {FormControl, Validators} from '@angular/forms';
import {passwordValid} from '../../Validators/PaswordValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


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


  constructor() { }

  ngOnInit() {
  }


  registry(){
    console.log('rkbr');
  }
}
