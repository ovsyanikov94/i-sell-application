'use strict';

export class LotType{

  get lotTypeTitle(): string {
    return this._lotTypeTitle;
  }

  set lotTypeTitle(value: string) {
    this._lotTypeTitle = value;
  }
  get lotTypeID(): number {
    return this._lotTypeID;
  }

  set lotTypeID(value: number) {
    this._lotTypeID = value;
  }

  private _lotTypeID: number;
  private _lotTypeTitle: string;

  constructor(lotTypeID: number , lotTypeTitle: string){

      this.lotTypeID = lotTypeID;
      this.lotTypeTitle = lotTypeTitle;

  }//constructor

}//LotType
