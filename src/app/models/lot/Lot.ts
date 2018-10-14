'use strict';
import {User} from '../../models/user/User';
import { Comment } from '../comment/Comment';


class MapCoord {
  lat: number;
  log: number;


  constructor(lat: number, log: number){
    this.lat = lat;
    this.log = log;
  }
}

export class Lot {

  get comments(): Comment[] {
    return this._comments;
  }

  set comments(value: Comment[]) {
    this._comments = value;
  }

  get lotStatus(): string {
    return this._lotStatus;
  }

  set lotStatus(value: string) {
    this._lotStatus = value;
  }

  get lotType(): string {
    return this._lotType;
  }

  set lotType(value: string) {
    this._lotType = value;
  }

  get lotBuyer(): User {
    return this._lotBuyer;
  }

  set lotBuyer(value: User) {
    this._lotBuyer = value;
  }
  get lotSeller(): User {
    return this._lotSeller;
  }

  set lotSeller(value: User) {
    this._lotSeller = value;
  }
  get lotName(): string {
    return this._lotName;
  }

  set lotName(value: string) {
    this._lotName = value;
  }
  get lotFoto(): string[] {
    return this._lotFoto;
  }

  set lotFoto(value: string[]) {
    this._lotFoto = value;
  }
  get lotDescription(): string {
    return this._lotDescription;
  }

  set lotDescription(value: string) {
    this._lotDescription = value;
  }
  get lotCategory(): string {
    return this._lotCategory;
  }

  set lotCategory(value: string) {
    this._lotCategory = value;
  }
  get lotStartPrice(): number {
    return this._lotStartPrice;
  }

  set lotStartPrice(value: number) {
    this._lotStartPrice = value;
  }
  get lotMapPlase(): MapCoord {
    return this._lotMapPlase;
  }

  set lotMapPlase(value: MapCoord) {
    this._lotMapPlase = value;
  }
  get lotCurrentPrice(): number {
    return this._lotCurrentPrice;
  }

  set lotCurrentPrice(value: number) {
    this._lotCurrentPrice = value;
  }
  get lotAdminAnswerDate(): Date {
    return this._lotAdminAnswerDate;
  }

  set lotAdminAnswerDate(value: Date) {
    this._lotAdminAnswerDate = value;
  }

  get lotSendDate(): Date {
    return this._lotSendDate;
  }

  set lotSendDate(value: Date) {
    this._lotSendDate = value;
  }

  get lotStartDate(): Date {
    return this._lotStartDate;
  }

  set lotStartDate(value: Date) {
    this._lotStartDate = value;
  }


  private _lotStatus: string;
  private _lotType: string;
  private _lotBuyer: User;
  private _lotSeller: User;
  private _lotName: string;
  private _lotFoto: string[];
  private _lotDescription: string;
  private _lotCategory: string;
  private _lotStartPrice: number;
  private _lotMapPlase: MapCoord;
  private _lotCurrentPrice: number;
  private _lotAdminAnswerDate: Date;
  private _lotSendDate: Date;
  private _lotStartDate: Date;
  private _comments: Comment[] = [];


  constructor(){
    this._lotStatus = 'статус лота';
    this._lotType = 'тип лота';
    this._lotBuyer = new User();
    this._lotSeller = new User();
    this._lotName = 'Наименование товара';
    this._lotFoto = ["/public/lot-images/dell1.jpg", "/public/lot-images/dell2.jpg", "/public/lot-images/dell3.jpg"];
    this._lotDescription = 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.';
    this._lotCategory = 'Категория лота';
    this._lotStartPrice = 85.20;
    this._lotMapPlase = new MapCoord(0, 0);
    this._lotCurrentPrice = 100.54;
    this._lotAdminAnswerDate = new Date();
    this._lotSendDate = new Date();
    this._lotStartDate = new Date();

    const comment: Comment = new Comment();

    comment.commentSendDate = '2018-10-10 17:00';
    comment.commentStatus = 1;
    comment.commentType = 1;
    comment.commentText = 'Lorem ipsum dolor sist amet, consectetur adipisicing elit. Delectus dolore earum eveniet necessitatibus officiis omnis, perspiciatis placeat quaerat vel voluptatem. Aliquam molestiae nemo nostrum placeat quam saepe similique sint voluptatum! Lorem ipsum dolor sist amet, consectetur adipisicing elit. Delectus dolore earum eveniet necessitatibus officiis omnis, perspiciatis placeat quaerat vel voluptatem. Aliquam molestiae nemo nostrum placeat quam saepe similique sint voluptatum!';
    comment.userSender = new User();
    comment.userReceiver = this;

    for ( let i = 0 ; i < 10 ; i++ ){
      this._comments.push(comment);
    }//for

  }//constructor

}
