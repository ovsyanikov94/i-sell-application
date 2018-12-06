import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {Admin} from '../../models/admin/Admin';
import {Lot} from '../../models/lot/Lot';
import {GetUserService} from "../../services/user/get-user.service";
import {ServerResponse} from "../../models/server/ServerResponse";
import {User} from "../../models/user/User";

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  public admin: Admin = new Admin();
  public IsRootAdmin: boolean = true;


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
    Validators.pattern(/^((\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ )
  ]);

  public avatarFormControl = new FormControl('');


  constructor(private getUserService: GetUserService) {

    this.getUserService.getUser()
      .then( this.onUserResponse.bind(this) );
  }

  onUserResponse(response: ServerResponse) {
    console.log(response.data);
    if (response.status === 200) {
      this.admin = response.data.curentAdmin as Admin;
      this.admin.user = response.data.userAdmin as User;
      //console.log(this.admin);
    }
    if(this.admin.user.userLogin!=="rootAdmin"){
      this.IsRootAdmin=false;
    }

  }
  onUpdateUserResponse(response: ServerResponse) {
    console.log(response.data);
    if (response.status === 200) {
      this.getUserService.getUser()
        .then( this.onUserResponse.bind(this) );

    }

  }

  ngOnInit(){

  }//ngOnInit

  SavePersonData(){
      this.getUserService.updateUser(this.admin.user, this.avatarFormControl.value)
        .then( this.onUpdateUserResponse.bind(this) );




  }//SavePersenData


}
