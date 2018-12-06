'use strict';



export class Role {
  get userRoleId(): number {
    return this._userRoleId;
  }

  //set roleID(value: number) {
    //this._roleID = value;
  //}
  get roleTitle(): string {
    return this._roleTitle;
  }

  set roleTitle(value: string) {
    this._roleTitle = value;
  }


  private _userRoleId: number;
  private _roleTitle: string;

  constructor( name: string){
    //this.roleID = value;
    this.roleTitle = name;
  }

}
