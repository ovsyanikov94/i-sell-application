'use strict';

export class User {
  get userPhone(): string {
    return this._userPhone;
  }

  set userPhone(value: string) {
    this._userPhone = value;
  }

  get userLastname(): string {
    return this._userLastname;
  }

  set userLastname(value: string) {
    this._userLastname = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get userEmail(): string {
    return this._userEmail;
  }

  set userEmail(value: string) {
    this._userEmail = value;
  }

  get userConfirmPassword(): string {
    return this._userConfirmPassword;
  }

  set userConfirmPassword(value: string) {
    this._userConfirmPassword = value;
  }

  private _userLogin: string;
  private _userPassword: string;
  private _userConfirmPassword: string;
  private _userEmail: string;
  private _userName: string;
  private _userLastname: string;
  private _userPhone: string;

  get userPassword(): string {
    return this._userPassword;
  }

  set userPassword(value: string) {
    this._userPassword = value;
  }

  get userLogin(): string {
    return this._userLogin;
  }

  set userLogin(value: string) {
    this._userLogin = value;
  }

  constructor(){
    this._userLogin = '';
    this._userPassword = '';
    this._userConfirmPassword = '';
    this._userEmail = '';
    this._userLastname = '';
    this._userName = '';
    this._userPhone = '';

  }

}
