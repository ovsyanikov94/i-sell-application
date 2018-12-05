'use strict';

import {User} from '../user/User';

export class Bidding {
  get dateRate(): number {
    return this._dateRate;
  }

  set dateRate(value: number) {
    this._dateRate = value;
  }
  get rate(): number {
    return this._rate;
  }

  set rate(value: number) {
    this._rate = value;
  }
  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  public _id: string;
  private _user: User;
  private _rate: number;
  private _dateRate: number;


  constructor() {

    this._id = 'gffdhhhdhgfh9d0h8';
    this._user = new User();
    this._user.userLogin = 'Olga';
    this._rate = 20;
    this._dateRate = 159878444444;
  }//constructor

}//LotType
