import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {Admin} from '../../models/admin/Admin';
import {Lot} from '../../models/lot/Lot';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  public admin: Admin = new Admin();

  public approvedLot: Lot[] =[];
  public rejectedLot: Lot[] =[];

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

  constructor() {

    for (let i = 0; i < 4; i++) {
      this.approvedLot.push(this.admin.approvedLot[i]);
      this.rejectedLot.push(this.admin.rejectedLot[i]);
    }//for

  }//constructor

  ngOnInit(){

  }//ngOnInit

}
