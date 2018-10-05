import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';

//MODELS
import { User } from '../../models/user/User';
import { MatDialog } from '@angular/material';
import { AuthData} from '../../models/modal.data/auth.data';


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
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {

  }

  authorize( event ){

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

    if ( event instanceof KeyboardEvent && event.code === "Enter" ){
      this.openDialog(authData);
    }//if
    else if ( event instanceof  MouseEvent){
      this.openDialog(authData);
    }//else if


  }//authorize

  openDialog( authData: AuthData ): void {

    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '400px',
      data: authData
    });

  }//openDialog

}

