"use strict";


export class Check{

  get checkSumm(): number {
    return this._checkSumm;
  }

  set checkSumm(value: number) {
    this._checkSumm = value;
  }
  get checkID(): number {
    return this._checkID;
  }

  set checkID(value: number) {
    this._checkID = value;
  }
  get checkDate(): string {
    return this._checkDate;
  }

  set checkDate(value: string) {
    this._checkDate = value;
  }

  private _checkDate: string;
  private _checkID: number;
  private _checkSumm: number;

  constructor( checkDate: string , checkID: number, checkSumm: number ){

    this.checkDate = checkDate;
    this.checkID = checkID;
    this.checkSumm = checkSumm;

  }//constructor

}//check
