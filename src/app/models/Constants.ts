"use strict";


export class Constants {

  static readonly APP_LIMIT: number = 1;
  static readonly APP_OFFSET: number = 0;

  static readonly LOT_PLANED: number = 1; //запланированный
  static readonly LOT_INSTANT: number = 2; //немедленный

  static readonly COMMENT_LIMIT: number = 10;
  static readonly COMMENT_OFFSET: number = 0;

  static readonly DISLIKE: number = 0;
  static readonly LIKE: number = 1;

  static readonly APP_LIMIT_LOT: number = 4;
  static readonly APP_OFFSET_LOT: number = 0;

  static readonly COMMENT_TYPE_LOT: number = 1; //Лот
  static readonly COMMENT_TYPE_PERSONAL: number = 2; //Личное сообщение

  static readonly COMMENT_STATUS_READ: number = 1; //Прочитано
  static readonly COMMENT_STATUS_NOT_READ: number = 2; //Не прочитано
  static readonly COMMENT_STATUS_DELETED: number = 3; //Удалено

}//Constants
