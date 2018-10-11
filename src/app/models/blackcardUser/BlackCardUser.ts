'use stric'

import {User} from '../../models/user/User';

export class BlackCardUser{
  get photo(): string {
    return this._photo;
  }

  set photo(value: string) {
    this._photo = value;
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  private _name: string;
  private _lastName: string;
  private _login: string
  private _photo: string;

  constructor(user: User){

    this._login = user.userLogin || "Dfcz";
    this._lastName = user.userLastname || "Dfcz";
    this._name = user.userName || "Dfcz";
    this._photo = user.userPhoto || "Dfcz";

  }//constructor

}
