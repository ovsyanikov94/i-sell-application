"use strict";


export class ApiRoutes{


  static readonly SERVER_URL: string = 'http://localhost:5012/i-sell-admin-api/api/';

  //USER
  static readonly USER_REGISTER: string = 'registryUser';
  static readonly USER_AUTHORIZE: string = 'auth-user';
  static readonly GET_USER_BYID: string = 'getUserByID';
  static readonly USER_CHANGE_PARAMS: string = 'updateUserInfo';
  static readonly USER_INFO: string = 'getUser';
  static readonly USER_ADD: string = 'addUserWithRole';
  static readonly GET_USER_ROLE_BYID: string = 'getRoleUserById';
  static readonly GET_USER_ROLES_LIST: string = 'listUsersRole';
  static readonly IS_USER_AUTHORIZED: string = 'check-admin-access';


  //CATEGORIES
  static readonly GET_CATEGORIES_LIST: string = 'category/list';
  static readonly ADD_CATEGORY:        string = 'add-category';
  static readonly DELETE_CATEGORY:     string = 'delete-category';


  //LOT
  static readonly GET_LOT_LIST_PANEL: string = 'lotListPanel';
  static readonly GET_LOT_BY_ID:     string = 'singleLot';
  static readonly APPROVED_LOT_BY_ID:     string = 'lotApprovedPanel';

  static readonly LOT_MARK_LIST: string = 'lot-mark-list';
  static readonly UPDATE_LOT_MARK: string = 'update-lot-mark';

  //typelot

  static readonly GET_LOT_TYPES_LIST: string = 'lotType';
  static readonly GET_LOT_TYPE_BYID: string = 'lotTypeById';

  //STATUSLOT
  static readonly GET_LOT_STATUS_BYID: string = 'lotStatusById';

  //COMMENTS
  static readonly COMMENT_ADD_NEW: string = 'comment';
}
