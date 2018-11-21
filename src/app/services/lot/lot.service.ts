import { Injectable } from '@angular/core';

import { ApiRoutes } from '../../models/ApiRoutes';

import {ServerResponse} from "../../models/server/ServerResponse";

import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

import { Lot } from '../../models/lot/Lot';
import {FileInput} from 'ngx-material-file-input';

@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor(
    private http: HttpClient
  ) { }
  GetUserBuyLot(statusId: string, offset: number, limit: number ): Promise<ServerResponse>{
    const formData = new FormData();
    formData.append('idStatus' , statusId) ;
    formData.append('limit' , limit.toString()) ;
    formData.append('offset' , offset.toString()) ;

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_USER_LOT_BUY}`,
      formData
    ).toPromise() as Promise<ServerResponse>;

  }//GetUserBuyLot
  GetUserSaleLot(statusId: string, offset: number, limit: number ): Promise<ServerResponse>{
    const formData = new FormData();
    formData.append('idStatus' , statusId) ;
    formData.append('limit' , limit.toString()) ;
    formData.append('offset' , offset.toString()) ;
    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_USER_LOT_SALE}`,
      formData
    ).toPromise() as Promise<ServerResponse>;

  }//GetUserSaleLot
  getStatusLotBuy(): Promise<ServerResponse>{
    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_STATUS_LOT_BUY}`,
    ).toPromise() as Promise<ServerResponse>;

  }//getStatusLotBuy
  getStatusLotSale(): Promise<ServerResponse>{

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_STATUS_LOT_SALE}`,
    ).toPromise() as Promise<ServerResponse>;

  } //getStatusLotSale


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

  addLot( lot: Lot, files: FileInput ): Promise<ServerResponse>{

    console.log('files' , files);

    const formData = new FormData();

    [].forEach.call(files.files , ( file ) => {
      formData.append('files' , file );
    });

    formData.append('lotTitle' , lot.lotTitle) ;

    console.log('files' , files);

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.ADD_LOT}`,
      formData
    ).toPromise() as Promise<ServerResponse>;

  }//getLot
}
