import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {User} from '../../models/user/User';
import {Role} from '../../models/role/Role';
import {FormControl, Validators} from '@angular/forms';
import { PasswordConfirmValidator } from '../../Validators/PaswordValidator';
import { MessageModalComponent } from '../../modals/message-modal/message-modal.component';
import {AddUserService} from "../../services/user/add-user.service";
import {ServerResponse} from "../../models/server/ServerResponse";
import {MatSelectModule} from '@angular/material/select';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-moderator',
  templateUrl: './add-moderator.component.html',
  styleUrls: ['./add-moderator.component.css']

})
export class AddModeratorComponent implements OnInit {

  public user: User = new User();
  public selectedRole: number;
  public roles: Role[] = [];
  //new Role(1, 'Администратор'),
  // new Role(2, 'Модератор'),
  // new Role(3, 'Загеристрированный'),
  //new Role(4, 'Анонимный'),
  //];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
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
    Validators.pattern(/^[a-z\d]{4,16}$/i),
  ]);
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/.+@.+\..+/i)
  ]);
  public phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/i)
  ]);

  public passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  public passwordConfirmFormControl = new FormControl('', [
    Validators.required,
    PasswordConfirmValidator( this.user )
  ]);

  public photoControl = new FormControl('');

  public selectedRoleControl = new FormControl('', [
    Validators.required
  ]);

  // public matcher = new MyErrorStateMatcher();


  constructor(
    private addModeratorDialog: MatDialog,
    private addUserService: AddUserService
  ) {
    console.log('Before service');
    this.addUserService.getUserRoles()
      .then( this.onUserRolesResponse.bind(this) );
  }

  onUserRolesResponse(response: ServerResponse){


    if ( response.status === 200 ) {
      this.roles = response.data as Role[];
      console.log(this.roles);
    }
    //console.log(this.roles);
  }//onUserRolesResponse

  ngOnInit() {

  }

  checkAllFields(): boolean{

    return this.nameFormControl.valid &&
      this.lastNameFormControl.valid &&
      this.loginFormControl.valid &&
      this.emailFormControl.valid &&
      this.phoneFormControl.valid &&
      this.passwordFormControl.valid &&
      this.passwordConfirmFormControl.valid &&
      this.selectedRoleControl.valid;

  }//

  openDialog( msg: string ){

    this.addModeratorDialog.open(MessageModalComponent , {
      data: {
        message: msg
      }
    });

  }//openDialog




  async addModerator(){


    if ( this.checkAllFields() === true ){
      //AJAX REGISTER REQUEST

      console.log(this.selectedRole);
      try{

        if (this.selectedRole) {
          const roleUserResponse = await this.addUserService.getRoleUserById(this.selectedRole);
          this.user.userRole = roleUserResponse.data;
        }//if

        const response = await this.addUserService.addUserWithRole(this.user, this.photoControl.value);

        console.log('response' , response);
        this.openDialog( response.message );

      }//try
      catch (ex){

        console.log('Exception: ' , ex);
        this.openDialog(ex.error.message );

      }//catch
    }//if
    else{
      this.openDialog('Есть ошибки в заполнении формы!');
    }//else

  }//registry


}
