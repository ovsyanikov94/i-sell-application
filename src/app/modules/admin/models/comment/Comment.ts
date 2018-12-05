'use strict';

import { User } from '../user/User';
import { Lot } from '../lot/Lot';

export class Comment{

  get commentStatus(): number {
    return this._commentStatus;
  }

  set commentStatus(value: number) {
    this._commentStatus = value;
  }
  get commentType(): number {
    return this._commentType;
  }

  set commentType(value: number) {
    this._commentType = value;
  }
  get commentSendDate(): string {
    return this._commentSendDate;
  }

  set commentSendDate(value: string) {
    this._commentSendDate = value;
  }
  get commentText(): string {
    return this._commentText;
  }

  set commentText(value: string) {
    this._commentText = value;
  }
  get userReceiver(): User | Lot {
    return this._userReceiver;
  }

  set userReceiver(value: User | Lot) {
    this._userReceiver = value;
  }
  get userSender(): User {
    return this._userSender;
  }

  set userSender(value: User) {
    this._userSender = value;
  }

  private _userSender: User;
  private _userReceiver: User | Lot;
  private _commentText: string;
  private _commentSendDate: string;
  private _commentType: number;
  private _commentStatus: number;


  constructor() {

  }//constructor


}
