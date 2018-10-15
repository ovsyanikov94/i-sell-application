'use strict';

export class Hours{

  get hoursValue(): number {
    return this._hoursValue;
  }

  set hoursValue(value: number) {
    this._hoursValue = value;
  }
  get hoursID(): number {
    return this._hoursID;
  }

  set hoursID(value: number) {
    this._hoursID = value;
  }

  private _hoursID: number;
  private _hoursValue: number;

  constructor(hoursID: number , hoursValue: number){

    this.hoursValue = hoursValue;
    this.hoursID = hoursID;

  }//constructor

}//Hours
