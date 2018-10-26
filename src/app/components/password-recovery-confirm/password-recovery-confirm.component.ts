import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {PasswordConfirmValidator} from '../../Validators/PaswordValidator';
import {User} from '../../models/user/User';

@Component({
  selector: 'app-password-recovery-confirm',
  templateUrl: './password-recovery-confirm.component.html',
  styleUrls: ['./password-recovery-confirm.component.css']
})
export class PasswordRecoveryConfirmComponent implements OnInit {

  public user: User = new User();

  public passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  public passwordConfirmFormControl = new FormControl('', [
    Validators.required,
    PasswordConfirmValidator( this.user )
  ]);


  constructor() { }

  ngOnInit() {
  }

  confirmRecovery(){

  }

}
