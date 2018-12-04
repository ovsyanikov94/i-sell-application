import { Injectable } from '@angular/core';



import { ApiRoutes } from '../../models/ApiRoutes';

import { Constants } from '../../models/Constants';

import {ServerResponse} from "../../models/server/ServerResponse";

import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

import { Lot } from '../../models/lot/Lot';


@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor(
    private http: HttpClient
  ) { }


  getTypeLot( offset: number, limit: number ): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('limit' , limit.toString())
      .set('offset' , offset.toString());

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_LOT_TYPES_LIST}`,
      {
        params: httpParams
      }
    ).toPromise() as Promise<ServerResponse>;

  }//getTypeLot

  getTypeLotById( id: number ): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('id', id.toString());

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_LOT_TYPE_BYID}`,
      {
        params: httpParams
      }
    ).toPromise() as Promise<ServerResponse>;

  }//getTypeLot

  getStatusLotById( id: number ): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('id', id.toString());

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_LOT_STATUS_BYID}`,
      {
        params: httpParams
      }
    ).toPromise() as Promise<ServerResponse>;

  }//getTypeLot

  getLotListPanel( ): Promise<ServerResponse>{

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_LOT_LIST_PANEL}`
    ).toPromise() as Promise<ServerResponse>;


  }//getLot

  approvedLotById( id: string): Promise<ServerResponse>{

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.APPROVED_LOT_BY_ID}`,
      {
        id: id
      }
    ).toPromise() as Promise<ServerResponse>;


  }//getLot

  getLotById( id: string ): Promise<ServerResponse> {

    const httpParams: HttpParams = new HttpParams().set('id', id);

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_LOT_BY_ID}`,
      {
        params: httpParams
      }
    ).toPromise() as Promise<ServerResponse>;
  }//getLotById

}
