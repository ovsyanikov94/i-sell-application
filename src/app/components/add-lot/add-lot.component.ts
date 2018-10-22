import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';
import { OpenStreetMapProvider , GeoSearchControl } from 'leaflet-geosearch';

declare let L;

//MODELS
import { Lot } from '../../models/lot/Lot';
import { Category } from '../../models/category/Category';
import { LotType } from '../../models/lot-type/LotType';
import { MatDialog } from '@angular/material';
import { AuthData} from '../../models/modal.data/auth.data';
import { GeoSearchResult } from '../../models/GeoSearchResult';


import { DescriptionLengthValidator } from '../../Validators/DescriptionLengthValidator';
import {LatLng, Map, Marker} from 'leaflet';

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


  public geoSearchResults: GeoSearchResult[] = [];

  public geosearch: OpenStreetMapProvider = new OpenStreetMapProvider();

  public hours: number[] = [
    4,
    8,
    12,
    24,
    48
  ];

  public categories: Category[] = [
    new Category( 1 , 'Моб. Телефоны'),
    new Category( 2, 'Акссесуары')
  ];

  public lotTypes: LotType[] = [
    new LotType( 1 , 'Запланированный'),
    new LotType( 2, 'Немедленный')
  ];

  public lot: Lot = new Lot();

  selectedFiles: File[] = [];

  public textFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zа-я]{4,30}$/i),
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

    const popup = L.popup()
      .setLatLng(latLng)
      .setContent('<p>Hello world!<br />This is a nice popup.</p>')
      .openOn(this.map);

    this.marker.setLatLng( latLng );

    this.marker.setPopupContent(address.label);

    this.map.setView( [
      address.y ,
      address.x
    ], 13);

  }//onAddressSelected

  onFileSelected(event){

    console.log(this.multiplefile.value);

    //
    // this.selectedFiles = <File[]>event.target.files;
    // console.log(this.selectedFiles);

  }

  constructor(
    public dialog: MatDialog
  ) {
  }

  addLot( event ){

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
          position.coords.latitude,
          position.coords.longitude
        ],
        {icon: myIcon}
      ).addTo(this.map);

      //
      // //
      this.map.on('click' , ( event: any ) => {

        this.marker.setLatLng( event.latlng );

      });

    } );

  }//ngOnInit

}
