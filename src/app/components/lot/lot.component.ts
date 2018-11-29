import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';
import {LotImage} from '../../models/LotImage/lotImage';

import * as $ from 'jquery';

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

import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';
import {logging} from "selenium-webdriver";
declare let L;

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css'],
  providers: [NgbTooltipConfig]
})
export class LotComponent implements OnInit {

  public lot: Lot ;
  public currentUser: User = new User();
  public marker: Marker;
  public map: Map;

  public constants: Constants = Constants;

  public images: string[] = [];

  public moment  = moment;

  constructor(
    private geoService: GeoSearchService,
    private route: ActivatedRoute,
    private lotService: LotService,
    public dialog: MatDialog,
    public tooltipConfig: NgbTooltipConfig
  ) {

    this.route.data.subscribe( (resolvedData: any ) => {

      console.log('resolved data:' , resolvedData);
      this.lot = resolvedData.lotResponse.data as Lot;

      this.images = this.lot.lotImagePath.map(function(image) {
        return image.path;
      });

    } );

    this.tooltipConfig.placement = 'top';
    this.tooltipConfig.triggers = 'click';
    this.tooltipConfig.autoClose = 'outside';

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

    this.lotService.getCurrentLotMarkFromUser(this.lot)
      .then( (response: ServerResponse) => {

          console.log('response INFO: ', response);

          if ( response.data === Constants.DISLIKE ){
            const dislikeMarkIcon = document.querySelector("#dislikeIcon");
            dislikeMarkIcon.classList.toggle("DislikeMark");

            console.log('dislikeMarkIcon : ', dislikeMarkIcon);


          }//if
          else if ( response.data === Constants.LIKE ){
            const likeMarkIcon = document.querySelector("#likeIcon");
            likeMarkIcon.classList.toggle("LikeMark");

            console.log('likeMarkIcon : ', likeMarkIcon);

          }//else if

      } )
      .catch( error => {  } );


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

        const likeMarkIcon = document.querySelector("#likeIcon");
        const dislikeMarkIcon = document.querySelector("#dislikeIcon");

        if (+like !== 0){
          likeMarkIcon.classList.toggle("LikeMark");
        }//if

        if (+dislike !== 0){
          dislikeMarkIcon.classList.toggle("DislikeMark");
        }//if

      }//if

    }//try
    catch (ex){

      console.log('Ex: ' , ex);

    }//catch

  }//addLikeOrDislikeLot

  async showLikeDislikeModal(lot: Lot, mark: number){

    try{
        const response: ServerResponse = await this.lotService.getUsersListWithLikeDislike(lot, mark, Constants.APP_LIMIT_LOT, Constants.APP_OFFSET_LOT );

        console.log('response1', response);

        if (response.status === 200 && response.data !== null){

          this.dialog.open(LikeDislikeViewerModalComponent, { data: { users: response.data }});

        }//if
        else{

        }//else

    }//try
    catch (ex){
      console.log('Ex: ' , ex);
    }//catch

  }//showLikeDislikeModal

}//LotComponent
