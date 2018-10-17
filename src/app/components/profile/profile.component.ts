import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {Lot} from "../../models/lot/Lot";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User = new User();

  public subscribers: User[] = [
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),

  ];

  public lots: Lot[] = [
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
    new Lot(),
  ];

  constructor() { }

  ngOnInit() {
    this.user.userName = 'Алексей';
    this.user.userLastname = 'Фамилия';
    this.user.userPhone = '+3809238130';
    this.user.userLogin = 'Alex';
    this.user.userEmail = 'alex@gmail.com';
  }




  public Subscribe() {

}//Subscribe
}
