import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';
import { OpenStreetMapProvider , GeoSearchControl } from 'leaflet-geosearch';

declare let L;

//MODELS
import { Lot } from '../../models/lot/Lot';
import { User } from '../../models/user/User';
import { Category } from '../../models/category/Category';
import { LotType } from '../../models/lot-type/LotType';
import { MatDialog } from '@angular/material';
import { AuthData} from '../../models/modal.data/auth.data';
import { GeoSearchResult } from '../../models/geo-search/GeoSearchResult';
import {ServerResponse} from "../../models/server/ServerResponse";
import {Constants} from "../../models/Constants";
import {MapCoord} from "../../models/MapCoord/MapCoord";

import { DescriptionLengthValidator } from '../../Validators/DescriptionLengthValidator';
import {LatLng, Map, Marker} from 'leaflet';

//SERVICES
import { GeoSearchService } from '../../services/LeafletGeoSearch/geo-search.service';
import {GeoSearchByCoordsModel} from '../../models/geo-search/GeoSearchByCoordsModel';

import {LotService} from '../../services/lot/lot.service';
import {CategoryService} from '../../services/category/category.service';
import {Router} from "@angular/router";
import {AuthService} from "../../services/user/auth.service";

@Component({
  selector: 'app-add-lot',
  templateUrl: './add-lot.component.html',
  styleUrls: ['./add-lot.component.css']
})
export class AddLotComponent implements OnInit {

  public selectedCategory: Category = null;
  public selectedType: LotType = null;
  public selectedHour: number;
  public dateRange: Date;
  public constants: Constants = Constants;

  public geoSearchResults: GeoSearchResult[] = [];

  public geosearch: OpenStreetMapProvider = new OpenStreetMapProvider();

  public hours: number[] = [
    4,
    8,
    12,
    24,
    48
  ];

  public categories: Category[];

  public lotTypes: LotType[];

  public lot: Lot = new Lot();

  public mapLot: MapCoord  = new MapCoord();

  public selectedFiles: File[] = [];


  public textFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zа-я0-9\s]{1,50}$/i),
  ]);

  public descriptionFormControl = new FormControl('', [
    Validators.required,
    DescriptionLengthValidator(15, 500)
  ]);

  public priceFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[1-9]\d{0,7}(?:\.\d{1,4})?|\.\d{1,4}$/),
  ]);

  public categoryFormControl = new FormControl('', [
    Validators.required
  ]);

  public typeFormControl = new FormControl('', [
    Validators.required
  ]);

  public radioButtonFormControl = new FormControl('', [
    Validators.required
  ]);

  public marker: Marker;
  public map: Map;

  public multiplefile = new FormControl('');

  //https://github.com/smeijer/leaflet-geosearch
  //https://www.npmjs.com/package/leaflet
  //https://github.com/Asymmetrik/ngx-leaflet

  async onAddressInput( address ){

    this.geoSearchResults.length = 0;

    const response = await this.geosearch.search({ query: address });

    this.geoSearchResults = response as GeoSearchResult[];

  }//onAddressInput

  onAddressSelected( address: GeoSearchResult ){

    const latLng: LatLng = new LatLng(
      address.y ,
      address.x
    );

    this.mapLot.lat = address.y;
    this.mapLot.lon = address.x;

    const popup = L.popup()
      .setLatLng(latLng)
      .setContent(`<p>${address.label}</p>`)
      .openOn(this.map);

    this.marker.setLatLng( latLng );

    this.marker.setPopupContent(address.label);

    this.map.setView( [
      address.y ,
      address.x
    ], 13);

  }//onAddressSelected

  constructor(
    public dialog: MatDialog,
    private geoSearchService: GeoSearchService,
    private lotService: LotService,
    private categoryService: CategoryService,
    private router: Router,
    private authService: AuthService,

  ) {

    this.categoryService.getCategories(
      Constants.APP_OFFSET,
      Constants.APP_LIMIT
    ).then( this.onCategoryResponse.bind(this) );

    this.lotService.getTypeLot(
      Constants.APP_OFFSET,
      Constants.APP_LIMIT
    ).then( this.onLotTypesResponse.bind(this) );

  }//constructor

  onCategoryResponse(response: ServerResponse){

    console.log(response);

    try{

      if ( response.status === 200 ){

        this.categories = response.data as Category[];

      }//if

    }//try
    catch ( ex ){

      console.log( "Exception: " , ex );

    }//catch

  }//onCategoryResponse

  async onLotTypesResponse(response: ServerResponse){

    console.log('onLotTypesResponse', response);

    try{

      if ( response.status === 200 ){

        this.lotTypes = response.data as LotType[];



      }//if



    }//try
    catch ( ex ){

      if ( response.status === 401){
        this.router.navigateByUrl('/authorize');
      }
      
      console.log( "Exception: " , ex );

    }//catch

  }//onLotTypesResponse


  addLot( event ){

    console.log('lot', this.lot);
    console.log('lotImagePath', this.multiplefile.value);
    console.log('categories', this.categoryFormControl.value);
    console.log('startPrice', this.priceFormControl.value);
    console.log('mapLot', this.mapLot);
    console.log('countHourTrade', this.radioButtonFormControl.value);
    console.log('datePlacement', this.dateRange);

    const authData: AuthData = new class implements AuthData {
      message: string;
    };

    authData.message = "Лот добавлен!";

    if ( event instanceof KeyboardEvent && event.code === "Enter" ){
      this.openDialog(authData);
    }//if
    else if ( event instanceof  MouseEvent){
      this.openDialog(authData);
    }//else if


  }//authorize

  openDialog( authData: AuthData ): void {

    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '400px',
      data: authData
    });

  }//openDialog

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition( (position: Position) => {

      this.map = L.map('map').setView( [
        position.coords.latitude,
        position.coords.longitude
      ], 13);

      this.mapLot.lat = position.coords.latitude;
      this.mapLot.lon = position.coords.longitude;

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
          position.coords.latitude,
          position.coords.longitude
        ],
        {icon: myIcon}
      ).addTo(this.map);

      //
      // //
      this.map.on('click' , async ( event: any ) => {

        this.marker.setLatLng( event.latlng );

        this.mapLot.lat = event.latlng.lat;
        this.mapLot.lon = event.latlng.lng;

        const result: GeoSearchByCoordsModel = await this.geoSearchService.getAddressByCords(event.latlng);

        this.marker
          .bindPopup(result.display_name)
          .openPopup();
      });

    } );

  }//ngOnInit

}
