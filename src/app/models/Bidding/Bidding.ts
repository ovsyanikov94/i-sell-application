'use strict';

import {User} from "../user/User";

export class Bidding{

  public _id: string;
  public user: User;
  public rate: number;
  public dateRate: number;


  constructor(){

    this._id = 'gffdhhhdhgfh9d0h8';
      this.user = new User();
      this.user.userLogin = 'Olga';
    this.rate =  20;
      this.dateRate = 159878444444;
  }//constructor

}//LotType
