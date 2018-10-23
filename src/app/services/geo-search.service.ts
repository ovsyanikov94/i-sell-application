import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { LatLng } from 'leaflet';
import {GeoSearchByCoordsModel} from '../models/geo-search/GeoSearchByCoordsModel';

@Injectable({
  providedIn: 'root'
})
export class GeoSearchService {

  constructor(
    private hClient: HttpClient
  ) {}

  getAddressByCords( latLng: LatLng ): Promise<GeoSearchByCoordsModel>{

    const queryParams = new HttpParams()
      .set('lat' , latLng.lat.toString())
      .set('lon' , latLng.lng.toString())
      .set('format' , 'json');

    return this
      .hClient
      .get(`https://nominatim.openstreetmap.org/reverse`, {
        params: queryParams
      })
      .toPromise() as Promise<GeoSearchByCoordsModel>;

  }//getAddressByCords


}//GeoSearchService

