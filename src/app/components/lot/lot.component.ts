import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';

import {LatLng, Map, Marker} from 'leaflet';
import {MatTabChangeEvent} from '@angular/material';
import { GeoSearchService } from '../../services/LeafletGeoSearch/geo-search.service';
import {GeoSearchByCoordsModel} from '../../models/geo-search/GeoSearchByCoordsModel';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {LotService} from "../../services/lot/lot.service";
import { switchMap } from 'rxjs/operators';
import {ServerResponse} from "../../models/server/ServerResponse";
import {Category} from "../../models/category/Category";

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

  public images: String[];

  constructor(
    private geoService: GeoSearchService,
    private router: ActivatedRoute,
    private lotService: LotService,

  ) {

  }


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

  ngOnInit() {

    const idLot = this.router.snapshot.paramMap.get("id");

    this.lotService.getLotById(
      idLot
    ).then(this.onLotResponse.bind(this));

  }//ngOnInit

  onLotResponse(response: ServerResponse){
    //
    // try{
    //
    //   if ( response.status === 200 ){
    //
    //     this.lot = response.data as Lot;
    //
    //    for ( let i = 0; i < this.lot.lotImagePath.length; i++){
    //
    //      const image = this.lot.lotImagePath[i];
    //    //  this.images.push(image.path);
    //    }//for
    //     this.images = this.lot.lotImagePath.map(function(image) {
    //    //   return image.path;
    //     });
    //
    //   }//if
    //
    // }//try
    // catch ( ex ){
    //
    //   console.log( "Exception: " , ex );
    //
    // }//catch

  }//onCategoryResponse

}//LotComponent
