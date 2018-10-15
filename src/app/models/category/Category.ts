'use strict';


export class Category{

  get categoryID(): number {
    return this._categoryID;
  }

  set categoryID(value: number) {
    this._categoryID = value;
  }
  get categoryTitle(): string {
    return this._categoryTitle;
  }

  set categoryTitle(value: string) {
    this._categoryTitle = value;
  }

  private _categoryTitle: string;
  private _categoryID: number;

  constructor( categoryID: number , categoryTitle: string ){

    this.categoryID = categoryID;
    this.categoryTitle = categoryTitle;

  }//constructor

}//Category
