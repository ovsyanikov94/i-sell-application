import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';
import {LotImage} from '../../models/LotImage/lotImage';


import {MatDialog} from "@angular/material";
import { LikeDislikeViewerModalComponent } from "../../modals/like-dislike-viewer-modal/like-dislike-viewer-modal.component";

import { Constants } from "../../models/Constants";

import {LatLng, Map, Marker} from 'leaflet';
import {MatTabChangeEvent} from '@angular/material';
import { GeoSearchService } from '../../services/LeafletGeoSearch/geo-search.service';
import {GeoSearchByCoordsModel} from '../../models/geo-search/GeoSearchByCoordsModel';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {LotService} from "../../services/lot/lot.service";
import { switchMap } from 'rxjs/operators';
import {ServerResponse} from "../../models/server/ServerResponse";
import {Category} from "../../models/category/Category";
import {LotType} from "../../models/lot-type/LotType";
import {LotStatus} from "../../models/lot-status/Lot-status";

import * as moment from 'moment';

import {logging} from "selenium-webdriver";

declare let L;

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css']
})
export class LotComponent implements OnInit {

  public lot: Lot ;
  public currentUser: User = new User();
  public marker: Marker;
  public map: Map;

  public constants: Constants = Constants;

  public images: string[] = [];

  public moment  = moment;

  public likeMarkIcon = null;
  public dislikeMarkIcon = null;

  public usersWithMarks = [];

  constructor(
    private geoService: GeoSearchService,
    private route: ActivatedRoute,
    private lotService: LotService,
    public dialog: MatDialog
  ) {

    this.route.data.subscribe( (resolvedData: any ) => {

      console.log('resolved data:' , resolvedData);
      this.lot = resolvedData.lotResponse.data as Lot;

      this.images = this.lot.lotImagePath.map(function(image) {
        return image.path;
      });

    } );

  }//constructor

  onTabChanged( event: MatTabChangeEvent ){

    if (event.index === 1 && !this.map ){

      this.initMap();

    }//if

  }//onTabChanged

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

  ngOnInit(){

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

}//LotComponent
