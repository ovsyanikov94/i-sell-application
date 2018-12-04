"use strict";
import { Lot } from '../lot/Lot';

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

  get adminPhoto(): string {
    return this._adminPhoto;
  }

  set adminPhoto(value: string) {
    this._adminPhoto = value;
  }
  get adminPhone(): string {
    return this._adminPhone;
  }

  set adminPhone(value: string) {
    this._adminPhone = value;
  }
  get adminLastname(): string {
    return this._adminLastname;
  }

  set adminLastname(value: string) {
    this._adminLastname = value;
  }
  get adminName(): string {
    return this._adminName;
  }

  set adminName(value: string) {
    this._adminName = value;
  }
  get adminEmail(): string {
    return this._adminEmail;
  }

  set adminEmail(value: string) {
    this._adminEmail = value;
  }
  get adminConfirmPassword(): string {
    return this._adminConfirmPassword;
  }

  set adminConfirmPassword(value: string) {
    this._adminConfirmPassword = value;
  }
  get adminOldPassword(): string {
    return this._adminOldPassword;
  }

  set adminOldPassword(value: string) {
    this._adminOldPassword = value;
  }
  get adminPassword(): string {
    return this._adminPassword;
  }

  set adminPassword(value: string) {
    this._adminPassword = value;
  }
  get adminLogin(): string {
    return this._adminLogin;
  }

  set adminLogin(value: string) {
    this._adminLogin = value;
  }

  private _adminLogin: string;
  private _adminPassword: string;
  private _adminOldPassword: string;
  private _adminConfirmPassword: string;
  private _adminEmail: string;
  private _adminName: string;
  private _adminLastname: string;
  private _adminPhone: string;
  private _adminPhoto: string;
  private _approvedLot: Lot[] =[];
  private _rejectedLot: Lot[]=[];

  constructor(){

    this._adminLogin = "Admin";
    this._adminPassword = "12345";
    this._adminEmail = 'dkjdk@mail.com';
    this._adminName = "Vasyz"
    this._adminLastname = "Petrov";
    this._adminPhone = "435355436"
    this._adminPhoto = "https://www.meme-arsenal.com/memes/b3520d14f31986f0c13c9e47f76f8331.jpg";

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
