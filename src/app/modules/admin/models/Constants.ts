"use strict";


export class Constants {
  
  static readonly APP_LIMIT: number = 10;
  static readonly APP_OFFSET: number = 0;

  static readonly LOT_PLANED: number = 1; //запланированный
  static readonly LOT_INSTANT: number = 2; //немедленный

  static readonly LOT_STATUS_ACTIVE: number = 1;
  static readonly LOT_STATUS_IN_PROCESS: number = 2;
  static readonly LOT_STATUS_REJECTED: number = 3;
  static readonly LOT_STATUS_CLOSED: number = 4;

  static readonly DISLIKE: number = 0;
  static readonly LIKE: number = 1;

  static readonly APP_LIMIT_LOT: number = 4;
  static readonly APP_OFFSET_LOT: number = 0;
}
