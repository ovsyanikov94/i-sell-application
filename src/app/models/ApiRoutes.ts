"use strict";


export class ApiRoutes{

  static readonly SERVER_URL: string = 'http://localhost:5012/i-sell-admin-api/api/';

  //LOT
  static readonly GET_LOT_LIST: string = 'lotList';
  static readonly ADD_LOT:        string = 'lot';
  static readonly DELETE_LOT:     string = 'deleteLot/:id';
  static readonly UPDATE_LOT:     string = 'updateLot/:id';

  static readonly ADD_LOT_MARK: string = 'add-lot-mark';
  static readonly LOT_MARK_LIST: string = 'lot-mark-list';
  static readonly REMOVE_LOT_MARK: string = 'remove-lot-mark';
  static readonly UPDATE_LOT_MARK: string = 'update-lot-mark';

  //CATEGORIES
  static readonly GET_CATEGORIES_LIST: string = 'category/list';
  //typelot

  static readonly GET_LOT_TYPES_LIST: string = 'lotType';

  //USER
  static readonly USER_REGISTER: string = 'registryUser';
  static readonly USER_AUTHORIZE: string = 'auth-user';


}
