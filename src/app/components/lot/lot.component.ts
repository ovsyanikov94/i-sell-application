import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';
import {Comment} from "../../models/comment/Comment";
import { AuthData} from '../../models/modal.data/auth.data';
import {LotImage} from '../../models/LotImage/lotImage';

import {MatDialog, MatTabChangeEvent} from '@angular/material';

import { LikeDislikeViewerModalComponent } from "../../modals/like-dislike-viewer-modal/like-dislike-viewer-modal.component";
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';
import { FormControl , Validators } from '@angular/forms';

import { Constants } from "../../models/Constants";

import {LatLng, Map, Marker} from 'leaflet';

import { GeoSearchService } from '../../services/LeafletGeoSearch/geo-search.service';
import {GeoSearchByCoordsModel} from '../../models/geo-search/GeoSearchByCoordsModel';

import {LotService} from "../../services/lot/lot.service";
import { CommentService } from '../../services/comments/comment.service';
import {ServerResponse} from "../../models/server/ServerResponse";

import * as moment from 'moment';
import {LocalStorageService} from 'ngx-webstorage';
import {ActivatedRoute, Router} from '@angular/router';
import {LotStatus} from "../../models/lot-status/Lot-status";
import {LotType} from "../../models/lot-type/LotType";
declare let L;

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css'],

})
export class LotComponent implements OnInit {

  public lot: Lot ;
  public currentUser: User = new User();
  public marker: Marker;
  public map: Map;
  public user: User;

  public comments: Comment[];

  public comment: Comment = new Comment();

  public commentText = null;

  public constants: Constants = Constants;

  public images: string[] = [];

  public moment  = moment;

  public likeMarkIcon = null;
  public dislikeMarkIcon = null;

  public usersWithMarks = [];

  public commentFormControl = new FormControl('', [
    Validators.required
  ]);

  public commentOffset = 0;

  public selectedComment = 0;

  constructor(
    private geoService: GeoSearchService,
    private route: ActivatedRoute,
    private router: Router,
    private lotService: LotService,
    private commentService: CommentService,
    public dialog: MatDialog,
    private localStorage: LocalStorageService
  ) {

    this.user = localStorage.retrieve('user') as User;
    console.log('user.localStorage:' , this.user);

    //Получение всех параметров, указанных через :ИмяПараметра
    this.route.params.subscribe( (params) => {
      console.log('params: ' , params);

      setTimeout( _ => {

        console.log('server response');

      } , 2500 );

    } );

    this.route.data.subscribe( (resolvedData: any ) => {

      console.log('resolved data:' , resolvedData);
      this.lot = resolvedData.lotResponse.data as Lot;
      this.comments = this.lot.comments.slice(0, 10);

      console.log('SLICE:', this.comments);

      this.images = this.lot.lotImagePath.map(function(image) {
        return image.path;
      });

    } );

    this.onLotResponse();
  }//constructor

  async onLotResponse(){

    try{



        const typeLotResponse = await this.lotService.getTypeLotById(+this.lot.typeLot);

        if (typeLotResponse.status === 200){
          this.lot.typeLot = typeLotResponse.data as LotType;
        }//if

        const statusLotResponse = await this.lotService.getStatusLotById(+this.lot.statusLot);

        if (statusLotResponse.status === 200){
          this.lot.statusLot = statusLotResponse.data as LotStatus;
        }//if



    }//try
    catch ( ex ){

      console.log( "Exception: " , ex );

    }//catch


  }//onLotsResponse

  onTabChanged( event: MatTabChangeEvent ){

    this.commentOffset = 0;

    if (event.index === 1 && !this.map ){

      this.initMap();


    }//if

  }//onTabChanged

  addCommentsOffset(){
    this.commentOffset += Constants.COMMENT_LIMIT;
    this.getCommentsOffset();
  }

  async getCommentsOffset(){

    const response = await this.commentService.getLotComments(this.lot._id, Constants.COMMENT_LIMIT , this.commentOffset);

    if (response.status === 200 ){

      const res = response.data as Comment[];

      for (let i = 0; i < res.length; i++ ){

        this.comments.push(res[i]);

      }//for

    }//if

  }

  async initMap(){

    // this.lot.mapLot.lon = 37.7981509736429;
    // this.lot.mapLot.lat = 48.01950945;

    this.map = L.map('map').setView( [
      this.lot.mapLot.lat,
      this.lot.mapLot.lon
    ], 13);

    //

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const myIcon = L.icon(
      {
        iconUrl: 'modules/leaflet/dist/images/marker-icon.png',
        iconSize: [38, 55],
      }
    );

    this.marker = L.marker(
      [
        this.lot.mapLot.lat,
        this.lot.mapLot.lon
      ],
      {icon: myIcon}
    ).addTo(this.map);

    const response: GeoSearchByCoordsModel = await  this.geoService.getAddressByCords(
      new LatLng(this.lot.mapLot.lat, this.lot.mapLot.lon)
    );

    this.marker
      .bindPopup(response.display_name)
      .openPopup();


  }//initMap

  ngOnInit(){

    //Получение всех параметров, указанных через :ИмяПараметра
    this.route.params.subscribe( (params) => {
      console.log('params: ' , params);
    } );

    this.likeMarkIcon = document.querySelector("#likeIcon");
    this.dislikeMarkIcon = document.querySelector("#dislikeIcon");

    console.log('this.likeMarkIcon', this.likeMarkIcon);

    this.lotService.getCurrentLotMarkFromUser(this.lot)
      .then( (response: ServerResponse) => {

          console.log('response INFO: ', response);

          if ( response.data === Constants.DISLIKE ){

            this.dislikeMarkIcon.classList.toggle("DislikeMark");

          }//if
          else if ( response.data === Constants.LIKE ){

            this.likeMarkIcon.classList.toggle("LikeMark");

          }//else if

      } )
      .catch( error => {

      } ); //getCurrentLotMarkFromUser

    // const idLot = this.router.snapshot.paramMap.get("id");
    //
    // this.lotService.getLotById(
    //   idLot
    // ).then(this.onLotResponse.bind(this));

  }//ngOnInit


  onCommentResponse(response: ServerResponse){

    console.log(response);

    try{

      if ( response.status === 200 ){

        this.comments = response.data as Comment[];

      }//if

    }//try
    catch ( ex ){

      console.log( "Exception: " , ex );

    }//catch

  }//onCategoryResponse

  async addLikeOrDislikeLot( lot: Lot, mark: number ){

    try{

      const response: ServerResponse = await this.lotService.addLikeOrDislikeLot(lot , mark);

      console.log('response: ' , response);

      if ( response.status === 200 ){

        const like: number = response.data.like;
        const dislike: number = response.data.dislike;

        console.log('like, dislike', like, dislike);

        lot.countLikes += +like;
        lot.countDisLikes += +dislike;

        if (+like !== 0){
          this.likeMarkIcon.classList.toggle("LikeMark");
        }//if

        if (+dislike !== 0){
          this.dislikeMarkIcon.classList.toggle("DislikeMark");
        }//if

      }//if

    }//try
    catch (ex){

      console.log('Ex: ' , ex);

    }//catch

  }//addLikeOrDislikeLot

  async showLikeDislikeModal(lot: Lot, mark: number){

    this.usersWithMarks = [];

    try{
        const response: ServerResponse = await this.lotService.getUsersListWithLikeDislike(lot, mark, Constants.APP_LIMIT_LOT, Constants.APP_OFFSET_LOT );

        console.log('response1', response);

        if (response.status === 200 && response.data !== null){

          response.data.forEach( (user) => { this.usersWithMarks.push(user); } );

          this.dialog.open(LikeDislikeViewerModalComponent, { data: { users: this.usersWithMarks, mark: mark, lot: lot }});

        }//if
        else{

        }//else

    }//try
    catch (ex){
      console.log('Ex: ' , ex);
    }//catch

  }//showLikeDislikeModal

  openDialog( authData: AuthData ): void {

    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '400px',
      data: authData
    });

  }//openDialog

  async addComment(){

    try{

      this.comment.commentText = this.commentText;

      this.comment.commentType = Constants.COMMENT_TYPE_LOT;

      this.comment.commentStatus = Constants.COMMENT_STATUS_READ;

      this.comment.commentSendDate = Date.now().toString();

      this.comment.lot = this.lot._id;

      const CommentResponse: ServerResponse = await this.commentService.addComment(this.comment);

      if ( CommentResponse.status === 200 ){

        this.comment.userSender.userLogin = this.user.userLogin;
        this.comments.unshift( this.comment );

      }//if

    }//try
    catch (ex){
      console.log(ex);
      const authData: AuthData = {
        message: ex.error.message || ex.message
      };
      this.openDialog( authData);
    }//catch



  }//authorize


}//LotComponent
