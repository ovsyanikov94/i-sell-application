'use strict';

export class Lot {


  private _lotTitle: string;
  private _lotPhoto: string;
  private _lotDescription: string;
  private _lotCategory: string;
  private _lotType: string;
  private _lotStartingPrice: number;

  //<editor-fold desc="Getters">
  get lotTitle(): string {
    return this._lotTitle;
  }

  get lotPhoto(): string {
    return this._lotPhoto;
  }

  get lotDescription(): string {
    return this._lotDescription;
  }

  get lotCategory(): string {
    return this._lotCategory;
  }

  get lotType(): string {
    return this._lotType;
  }

  get lotStartingPrice(): number {
    return this._lotStartingPrice;
  }

  //</editor-fold>

  //<editor-fold desc="Setters">
  set lotTitle(value: string) {
    this._lotTitle = value;
  }

  set lotPhoto(value: string) {
    this._lotPhoto = value;
  }

  set lotDescription(value: string) {
    this._lotDescription = value;
  }

  set lotCategory(value: string) {
    this._lotCategory = value;
  }

  set lotType(value: string) {
    this._lotType = value;
  }

  set lotStartingPrice(value: number) {
    this._lotStartingPrice = value;
  }

  //</editor-fold>

  constructor(){
    this._lotTitle = '';
    this._lotPhoto = '';
    this._lotDescription = '';
    this._lotCategory = '';
    this._lotType = '';
    this._lotStartingPrice = 0;

  }

}
