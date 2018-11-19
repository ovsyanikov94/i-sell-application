'use strict';

export class LotStatus{

  public _id: number;
  public statusTitle: string;
  public statusID: number;

  constructor(_id: number , statusTitle: string, statusID: number){

    this._id = _id;
    this.statusTitle = statusTitle;
    this.statusID = statusID;

  }//constructor

}//LotType
