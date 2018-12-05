import { Injectable } from '@angular/core';

import { ApiRoutes } from '../../models/ApiRoutes';

import { Constants } from '../../models/Constants';

import {ServerResponse} from "../../models/server/ServerResponse";

import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

import { Lot } from '../../models/lot/Lot';
import {FileInput} from 'ngx-material-file-input';



@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor( private http: HttpClient ) { }//constructor

  GetUserBuyLot(statusId: number, offset: number, limit: number ): Promise<ServerResponse>{

    const formData = new FormData();
    formData.append('idStatus' , statusId.toString()) ;
    formData.append('limit' , limit.toString()) ;
    formData.append('offset' , offset.toString()) ;

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_USER_LOT_BUY}`,
      formData
    ).toPromise() as Promise<ServerResponse>;

  }//GetUserBuyLot

  GetUserSaleLot(statusId: number, offset: number, limit: number ): Promise<ServerResponse>{
    const formData = new FormData();
    formData.append('idStatus' , statusId.toString()) ;
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

  addLot( lot: Lot, files: FileInput ): Promise<ServerResponse>{

    console.log('files' , files);

    const formData = new FormData();

    if ( files ){

      [].forEach.call(files.files , ( file ) => {
        formData.append('images' , file );
      });
    }//if

    const categoriesIds = lot.categories.map(c => {
      return c._id;
    });

    formData.append('lotTitle' , lot.lotTitle) ;
    formData.append('startPrice' , lot.startPrice.toString()) ;
    formData.append('lotDescription' , lot.lotDescription) ;
    formData.append('mapLot' , JSON.stringify(lot.mapLot)) ;
    formData.append('countHourTrade' , lot.countHourTrade.toString()) ;
    formData.append('typeLot' , lot.typeLot.typeID.toString()) ;
    formData.append('categories' , JSON.stringify(categoriesIds)) ;

    if (lot.typeLot.typeID === Constants.LOT_PLANED){
      formData.append('dateStartTrade' , lot.dateStartTrade.toString()) ;
    }//if


    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.ADD_LOT}`,
      formData
    ).toPromise() as Promise<ServerResponse>;

  }//getLot

  getLotList( offset: number, limit: number ): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('limit' , limit.toString())
      .set('offset' , offset.toString());

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_LOT_LIST}`,
      {
        params: httpParams
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

  //поставить лайк или дизлайк лоту
  async addLikeOrDislikeLot( lot: Lot, mark: number ): Promise<ServerResponse>{

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.UPDATE_LOT_MARK}`,
      {
        receiver: lot._id,
        mark: mark
      }
    ).toPromise() as Promise<ServerResponse>;

  }//likeLot

  //получение списка оценок лота
  getUsersListWithLikeDislike( lot: Lot, mark: number, limit: number, offset: number ): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('receiver', lot._id.toString())
      .set('mark', mark.toString())
      .set('limit' , limit.toString())
      .set('offset' , offset.toString());

    return this.http.get(

      `${ApiRoutes.SERVER_URL}${ApiRoutes.LOT_MARK_USERS_WITH_MARKS}`,
      { params: httpParams }

    ).toPromise() as Promise<ServerResponse>;

  }//getUsersListWithLikeDislike

  //получения текущего статуса оценки на лоте от текущего пользователя
  getCurrentLotMarkFromUser(lot: Lot): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('receiver', lot._id.toString());

    return this.http.get(

      `${ApiRoutes.SERVER_URL}${ApiRoutes.LOT_MARKED_BY_USER}`,
      { params: httpParams }

    ).toPromise() as Promise<ServerResponse>;

  }//getCurrentLotMarkFromUser

}//LotService





