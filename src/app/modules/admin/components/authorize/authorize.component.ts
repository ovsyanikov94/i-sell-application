import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';
import {Router} from '@angular/router';
//MODELS
import { User } from '../../models/user/User';
import { MatDialog } from '@angular/material';
import { AuthData} from '../../models/modal.data/auth.data';
import {AuthService} from '../../services/user/auth.service';
import {ServerResponse} from '../../models/server/ServerResponse';


@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {

  public user: User = new User();

  public loginFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z]{4,20}$/i),
  ]);

  public passwordFormControl = new FormControl('', [
    Validators.required
  ]);


  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {

    this.user.userLogin = 'rootAdmin';
    this.user.userPassword = '123456';

  }

  ngOnInit() {

  }

  async authorize( event ){

    if ( this.loginFormControl.hasError('required') || this.loginFormControl.hasError('pattern')){
      return;
    }//if

    if ( this.passwordFormControl.hasError('required') ){
      return;
    }//if

    const authData: AuthData = new class implements AuthData {
      message: string;
    };
    authData.message = "Вы вошли!";

    try{
      console.log("Before Service");

      const response: ServerResponse = await this.authService.authorize(this.user);

      if ( response.status === 200 ){
          this.router.navigate(['/admin/main/profile/']);
      }//if
      else{

        this.openDialog({
          message: response.message
        });

      }//else
      console.log('RESPONSE: ' , response);

    }//try
    catch(ex){

      console.log('EXCEPTION: ' , ex);

    }//catch




  }//authorize

  openDialog( authData: AuthData ): void {

    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '400px',
      data: authData
    });

  }//openDialog

}

