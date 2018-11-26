"use strict";


export class ApiRoutes{

  static readonly SERVER_URL: string = 'http://localhost:5012/i-sell-admin-api/api/';

  //LOT
  static readonly GET_LOT_LIST: string = 'lotList';
  static readonly ADD_LOT:        string = 'lot';
  static readonly DELETE_LOT:     string = 'deleteLot/:id';
  static readonly UPDATE_LOT:     string = 'updateLot/:id';
  static readonly GET_LOT_BY_ID:     string = 'singleLot';
  static readonly GET_STATUS_LOT_BUY: string = 'GetListLotStatusBuy';
  static readonly GET_STATUS_LOT_SALE: string = 'GetListLotStatusSale';
  static readonly GET_USER_LOT_BUY: string = 'GetUserBuyLot';
  static readonly GET_USER_LOT_SALE: string = 'GetUserSaleLot';
  //CATEGORIES
  static readonly GET_CATEGORIES_LIST: string = 'category/list';
  //typelot

  static readonly GET_LOT_TYPES_LIST: string = 'lotType';
  static readonly GET_LOT_TYPE_BYID: string = 'lotTypeById';
  static readonly GET_LOT_STATUS_BYID: string = 'lotStatusById';

  //USER
  static readonly USER_REGISTER: string = 'registryUser';
  static readonly USER_AUTHORIZE: string = 'auth-user';
  static readonly GET_USER_BYID: string = 'getUserByID';
  static readonly USER_CHANGE_PARAMS: string = 'updateUserInfo';
  static readonly USER_INFO: string = 'getUser';

}
