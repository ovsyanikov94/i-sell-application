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

  static readonly UPDATE_LOT_MARK: string = 'update-lot-mark';
  static readonly LOT_MARK_USERS_WITH_MARKS = 'users-list-by-mark';
  static readonly LOT_MARKED_BY_USER = 'get-marked-lot-by-user';


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
  static readonly USER_SUBSCRIBERS: string = 'getSubscribers';
  static readonly USER_SUBSCRIPTION: string = 'getSubscriptions';
  static readonly USER_ADD_IN_SUBSCRIBERS: string = 'addInSubscribers';
  static readonly USER_REMOVE_IN_SUBSCRIBERS: string = 'removeInSubscribers';
  static readonly IS_USER_AUTHORIZED: string = 'check-user-access';
  static readonly ADD_USER_AVATAR: string = 'addUserAvatar'
  static readonly IN_LIST_SUBSCRIBERS: string = 'InListSubscribers';
  //COMMENTS
  static readonly COMMENT_ADD_NEW: string = 'comment';
  static readonly UPDATE_COMMENT: string = 'updateComment/:id';
  static readonly DELETE_COMMENT: string = 'deleteComment/:id';
  static readonly GET_COMMENTS: string = 'comment/list';


}
