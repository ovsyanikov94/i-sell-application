import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';

import {MatDialog} from "@angular/material";
import { LikeDislikeViewerModalComponent } from "../../modals/like-dislike-viewer-modal/like-dislike-viewer-modal.component";

import { Constants } from "../../models/Constants";

import {LatLng, Map, Marker} from 'leaflet';
import {MatTabChangeEvent} from '@angular/material';
import { GeoSearchService } from '../../services/LeafletGeoSearch/geo-search.service';
import {GeoSearchByCoordsModel} from '../../models/geo-search/GeoSearchByCoordsModel';

declare let L;

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.css'],

})
export class LotComponent implements OnInit {

  public lot: Lot = new Lot();
  public currentUser: User = new User();
  public marker: Marker;
  public map: Map;

  public constants: Constants;

  constructor(
    private geoService: GeoSearchService,
    public dialog: MatDialog
  ){  }//constructor


  onTabChanged( event: MatTabChangeEvent ){

    if (event.index === 1 && !this.map ){

      this.initMap();


    }//if

  }//onTabChanged

  async initMap(){

    this.lot.mapLot.lon = 37.7981509736429;
    this.lot.mapLot.lat = 48.01950945;

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


  }//ngOnInit


  public showLikeDislikeModal(){

    this.dialog.open(LikeDislikeViewerModalComponent, { data: { message: "Лайки/Дизлайки" }});

  }//showLikeDislikeModal


}//LotComponent
