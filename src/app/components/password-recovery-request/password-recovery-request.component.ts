import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-recovery-request',
  templateUrl: './password-recovery-request.component.html',
  styleUrls: ['./password-recovery-request.component.css']
})
export class PasswordRecoveryRequestComponent implements OnInit {

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor() { }

  ngOnInit() {
  }

  makeRecoveryRequest( email: string ){

    if ( this.emailFormControl.valid ){

      //request => this.emailFormControl.value

    }//if

  }//makeRecoveryRequest

}
