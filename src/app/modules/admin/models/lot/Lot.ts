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

  constructor(){
    // this._lotStatus = 'статус лота';
    // this._lotType = 'тип лота';
    // this._lotBuyer = new User();
    // this._lotSeller = new User();
    // this._lotName = 'Наименование товара';
    // this._lotFoto = ["/public/lot-images/dell1.jpg", "/public/lot-images/dell2.jpg", "/public/lot-images/dell3.jpg"];
    // this._lotDescription = 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.';
    // this._lotCategory = 'Категория лота';
    // this._lotStartPrice = 85.20;
    // this._lotMapPlase = new MapCoord(0, 0);
    // this._lotCurrentPrice = 100.54;
    // this._lotAdminAnswerDate = new Date();
    // this._lotSendDate = new Date();
    // this._lotStartDate = new Date();
    // this._lotEndDate = new Date();
    //
    // const comment: Comment = new Comment();
    //
    // comment.commentSendDate = '2018-10-10 17:00';
    // comment.commentStatus = 1;
    // comment.commentType = 1;
    // comment.commentText = 'Lorem ipsum dolor sist amet, consectetur adipisicing elit. Delectus dolore earum eveniet necessitatibus officiis omnis, perspiciatis placeat quaerat vel voluptatem. Aliquam molestiae nemo nostrum placeat quam saepe similique sint voluptatum! Lorem ipsum dolor sist amet, consectetur adipisicing elit. Delectus dolore earum eveniet necessitatibus officiis omnis, perspiciatis placeat quaerat vel voluptatem. Aliquam molestiae nemo nostrum placeat quam saepe similique sint voluptatum!';
    // comment.userSender = new User();
    // comment.userReceiver = this;
    //
    // for ( let i = 0 ; i < 10 ; i++ ){
    //   this._comments.push(comment);
    // }//for

  }//constructor

}//Lot
