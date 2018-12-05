"use strict";
import { Lot } from '../lot/Lot';
import { User } from '../user/User';


export class Admin{
  get rejectedLot(): Lot[] {
    return this._rejectedLot;
  }

  set rejectedLot(value: Lot[]) {
    this._rejectedLot = value;
  }
  get approvedLot(): Lot[] {
    return this._approvedLot;
  }

  set approvedLot(value: Lot[]) {
    this._approvedLot = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  private _user: User = new User();
  private _approvedLot: Lot[] =[];
  private _rejectedLot: Lot[]=[];

  constructor(){

    //this._user.userLogin = "Admin";
    //this._user.userPassword = "12345";
    //this._user.userEmail = 'dkjdk@mail.com';
    //this._user.userName = "Vasyz"
    //this._user.userLastname = "Petrov";
    //this._user.userPhone = "435355436"
    //this._user.userPhoto = "https://www.meme-arsenal.com/memes/b3520d14f31986f0c13c9e47f76f8331.jpg";

   // const lot: Lot = new Lot();

    for ( let i = 0 ; i < 10 ; i++ ){
      const lot: Lot = new Lot();
      lot.lotTitle+= i;
      this._approvedLot.push(lot);
    }//for

    for ( let i = 0 ; i < 8 ; i++ ){
      const lot: Lot = new Lot();
      lot.lotTitle+= i;
      this._rejectedLot.push(lot);
    }//for

  }
}
