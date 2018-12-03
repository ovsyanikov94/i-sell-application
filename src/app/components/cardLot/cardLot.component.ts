import {Component, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {MatDialog, MatSidenav} from '@angular/material';
import { BetModalComponent } from '../../modals/bet.modal/bet.modal.component';
import { BetData } from '../../models/modal.bet/bet.data';
import {FormControl, Validators} from "@angular/forms";
import { Category } from '../../models/category/Category';

import * as moment from 'moment';

//SERVICES
import {LotService} from '../../services/lot/lot.service';
import {CategoryService} from '../../services/category/category.service';
import {Constants} from "../../models/Constants";
import {ServerResponse} from "../../models/server/ServerResponse";
import {DOCUMENT} from "@angular/common";
import {Router} from "@angular/router";



@Component({
  selector: 'app-card-lot',
  templateUrl: './cardLot.component.html',
  styleUrls: ['./cardLot.component.css'],

})


export class CardLotComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: MatSidenav;

  public lots: Lot[] = [];

  public moment  = moment;
  public limit: number = Constants.APP_LIMIT_LOT;
  public offset: number = Constants.APP_OFFSET_LOT;

  public constants: Constants = Constants;

  public likeMarkIcon = null;
  public dislikeMarkIcon = null;



  categoriesControl = new FormControl();
  categories: Category[] = [];

  close() {
    this.sidenav.close();
  }

  constructor(
    public dialog: MatDialog ,
    private lotService: LotService,
    private categoryService: CategoryService,
    @Inject(DOCUMENT) private document: Document
  ) {


    this.categoryService.getCategories(
      Constants.APP_OFFSET,
      Constants.APP_LIMIT
    ).then( this.onCategoryResponse.bind(this) );

    this.lotService.getLotList(
      this.offset,
      this.limit
    ).then(this.onLotsResponse.bind(this));



  }//constructor

  async MoreLots(){

    this.offset += this.limit;

    const responsLots = await this.lotService.getLotList( this.offset, this.limit );

    if ( responsLots.status === 200){

      const moreLots =  responsLots.data as Lot[];

      moreLots.forEach(l => {

        this.lots.push (l);
      });

      if ( moreLots.length === 0 ){
        this.offset += this.lots.length;
      }//

      console.log('this.offset', this.offset);
    }//if



  }//MoreLots

  onCategoryResponse(response: ServerResponse){

    try{

      if ( response.status === 200 ){

        this.categories = response.data as Category[];

      }//if

    }//try
    catch ( ex ){

      console.log( "Exception: " , ex );

    }//catch

  }//onCategoryResponse

  onLotsResponse(response: ServerResponse){

    try{

      if ( response.status === 200 ){

        this.lots = response.data as Lot[];

        console.log('lots: ', this.lots);

      }//if

    }//try
    catch ( ex ){

      console.log( "Exception: " , ex );

    }//catch


  }//onLotsResponse

  //@HostListener("window:scroll", [])
  Top(){

    // window.scroll(0, 0 );
    // console.log(window);
    // const offset = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    // console.log(offset);

  }

  ngOnInit() {

    // this.likeMarkIcon = document.querySelectorAll("#likeIcon");
    // this.dislikeMarkIcon = document.querySelectorAll("#dislikeIcon");
    //
    // for (let i = 0; i < this.lots.length; i++){
    //
    //   this.lotService.getCurrentLotMarkFromUser(this.lots[i])
    //     .then( (response: ServerResponse) => {
    //
    //       console.log('response INFO: ', response);
    //
    //       if ( response.data === Constants.DISLIKE ){
    //
    //         this.dislikeMarkIcon.classList.toggle("DislikeMark");
    //
    //       }//if
    //       else if ( response.data === Constants.LIKE ){
    //
    //         this.likeMarkIcon.classList.toggle("LikeMark");
    //
    //       }//else if
    //
    //     } )
    //     .catch( error => {
    //
    //     } ); //getCurrentLotMarkFromUser
    //
    // }//for i



  }//ngOnInit

  bet( event, lot: Lot ){

    const betData: BetData = new class implements BetData {
      lot: Lot;
    };

    betData.lot = lot;

    if ( event instanceof KeyboardEvent && event.code === "Enter" ){
      this.openDialog(betData);
    }//if
    else if ( event instanceof  MouseEvent){
      this.openDialog(betData);
    }//else if


  }//authorize

  openDialog( betData: BetData ): void {

    const dialogRef = this.dialog.open(BetModalComponent, {
      width: '440px',
      data: betData
    });

  }//openDialog

  async addLikeOrDislikeLotOnCardLot(lot: Lot, mark: number){

    try{

      const response: ServerResponse = await this.lotService.addLikeOrDislikeLot(lot , mark);

      console.log('response: ' , response);

      if ( response.status === 200 ){

        const like: number = response.data.like;
        const dislike: number = response.data.dislike;

        console.log('like, dislike', like, dislike);

        lot.countLikes += +like;
        lot.countDisLikes += +dislike;

      }//if

    }//try
    catch (ex){

      console.log('Ex: ' , ex);

    }//catch

  }//addLikeOrDislikeLotOnCardLot

}//CardLotComponent
