import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';

//MODELS
import { User } from '../../models/user/User';
import { MatDialog } from '@angular/material';
import { AuthData} from '../../models/modal.data/auth.data';
import {AuthService} from '../../services/user/auth.service';
import {Router} from '@angular/router';
import {Constants} from '../../models/Constants';


@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {

  public user: User = new User();
  public constants: Constants = Constants;

  public loginFormControl = new FormControl('', [
    Validators.required
  ]);

  public passwordFormControl = new FormControl('', [
    Validators.required
  ]);


  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router

  ) {

    this.user.userLogin = 'Alex';
    this.user.userPassword = '123456';

  }

  ngOnInit() {

  }

  async authorize( event ){

    if ( this.loginFormControl.hasError('required')){
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

      const response = await this.authService.authorize( this.user );

      if ( response.status === 200 ){

        this.router.navigateByUrl('/main/my-profile');

      }//if
      else{

        this.openDialog({
          message: response.message
        });

      }//else

    }//try
    catch (ex){

      console.log('Ex: ' , ex);

      this.openDialog({
        message: ex.error.message
      });

    }//catch


  }//authorize

  openDialog( authData: AuthData ): void {

    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '400px',
      data: authData
    });

  }//openDialog

}

