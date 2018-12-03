'use strict';
import { User } from '..//user/User';
import { Comment } from '../comment/Comment';
import { LotType } from '../lot-type/LotType';
import { LotStatus } from '../lot-status/Lot-status';
import { Category } from "../category/Category";
import { MapCoord } from "../MapCoord/MapCoord";
import { LotImage } from "../LotImage/lotImage";


export class Lot {

  public _id: string;
  public lotTitle: string;
  public customer: User;
  public seller: User;
  public lotDescription: string;
  public lotImagePath: LotImage[];
  public startPrice: number;
  public mapLot: MapCoord;
  public currentRate: number;
  public countHourTrade: number;
  public dateAdminAnswer: number;
  public datePlacement: number;
  public dateStartTrade: number;
  public dateEndTrade: number;
  public typeLot: LotType;
  public statusLot: LotStatus;
  public comments: Comment[];
  public categories: Category[];
  public countLikes: number;
  public countDisLikes: number;

  //public lotMark: number;


  constructor(){

  }//constructor

}//Lot
