import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';
import {Comment} from "../../models/comment/Comment";
import { AuthData} from '../../models/modal.data/auth.data';
import {Category} from "../../models/category/Category";
import {LotType} from "../../models/lot-type/LotType";
import {LotStatus} from "../../models/lot-status/Lot-status";
import {LotImage} from '../../models/LotImage/lotImage';
import {GeoSearchByCoordsModel} from '../../models/geo-search/GeoSearchByCoordsModel';
import {ServerResponse} from "../../models/server/ServerResponse";

import {MatDialog} from "@angular/material";
import {MatTabChangeEvent} from '@angular/material';

import { LikeDislikeViewerModalComponent } from "../../modals/like-dislike-viewer-modal/like-dislike-viewer-modal.component";
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import { FormControl , Validators } from '@angular/forms';

import { Constants } from "../../models/Constants";

import {LatLng, Map, Marker} from 'leaflet';

import { GeoSearchService } from '../../services/LeafletGeoSearch/geo-search.service';
import {LotService} from "../../services/lot/lot.service";
import { CommentService } from '../../services/comments/comment.service';

import { switchMap } from 'rxjs/operators';


import * as moment from 'moment';
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

  public comments: Comment[];

  public comment: Comment = new Comment();

  public commentText = null;

  public constants: Constants = Constants;

  public images: string[] = [];

  public moment  = moment;

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
    public dialog: MatDialog
  ) {

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
      this.comments = this.lot.comments;

      this.images = this.lot.lotImagePath.map(function(image) {
        return image.path;
      });

    } );

    // this.commentService.getLotComments(
    //   this.lot._id,
    //   Constants.APP_OFFSET,
    //   Constants.APP_LIMIT
    // ).then( this.onCommentResponse.bind(this) );

  }//constructor


  onTabChanged( event: MatTabChangeEvent ){

    if (event.index === 1 && !this.map ){

      this.initMap();


    }//if

  }//onTabChanged

  addCommentsOffset(){
    this.commentOffset += Constants.APP_OFFSET;
    this.getCommentsOffset(this.selectedComment);
  }

  async getCommentsOffset(comment){

    const selectOld =  this.selectedComment;
    this.selectedComment = comment;

    const response = await this.commentService.getLotComments(this.lot._id, Constants.APP_OFFSET , Constants.APP_LIMIT );
    if (response.status === 200 ){

      this.comments = response.data.comments as Comment[];
      if ( selectOld !== comment){
        this.commentOffset = 0;
      }
    }
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
        iconUrl: '/node_modules/leaflet/dist/images/marker-icon.png',
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

  ngOnInit() {

    //Получение всех параметров, указанных через :ИмяПараметра
    this.route.params.subscribe( (params) => {
      console.log('params: ' , params);
    } );

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
        //lot.countLikes++;
      }//if

    }//try
    catch ( ex ){

      console.log( "Exception: " , ex );


    }//catch

  }//addLikeOrDislikeLot

  public showLikeDislikeModal(){

    this.dialog.open(LikeDislikeViewerModalComponent, { data: { message: "Лайки/Дизлайки" }});

  }//showLikeDislikeModal

  openDialog( authData: AuthData ): void {

    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '400px',
      data: authData
    });

  }//openDialog

  async addComment( event ){

    try{

      this.comment.commentText = this.commentText;

      this.comment.commentType = Constants.COMMENT_TYPE_LOT;

      this.comment.commentStatus = Constants.COMMENT_STATUS_READ;

      this.comment.commentSendDate = Date.now().toString();

      this.comment.lot = this.lot._id;

      const CommentResponse: ServerResponse = await this.commentService.addComment(this.comment);

      if ( CommentResponse.status === 200 ){

        this.comments.push( this.comment );

      }//if

      // const authData: AuthData = {
      //   message: CommentResponse.message
      // };
      //
      // if ( event instanceof KeyboardEvent && event.code === "Enter" ){
      //   this.openDialog(authData);
      // }//if
      // else if ( event instanceof  MouseEvent){
      //   this.openDialog(authData);
      // }//else if

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
