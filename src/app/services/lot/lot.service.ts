import { Injectable } from '@angular/core';

import { ApiRoutes } from '../../models/ApiRoutes';

import { Constants } from '../../models/Constants';

import {ServerResponse} from "../../models/server/ServerResponse";

import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

import { Lot } from '../../models/lot/Lot';
import {FileInput} from 'ngx-material-file-input';

import {User} from '../../models/user/User';

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

  //поставить лайк или дизлайк лоту
  async addLikeOrDislikeLot( lot: Lot, user: User, mark: number ): Promise<ServerResponse>{

    let likeOrDislike: number;

    if (mark === Constants.LIKE){
      likeOrDislike = Constants.LIKE;
    }//if
    else if (mark === Constants.DISLIKE){
      likeOrDislike = Constants.DISLIKE;
    }//else if

    if (mark === Constants.LIKE){

      return this.http.post(
        `${ApiRoutes.SERVER_URL}${ApiRoutes.ADD_LOT_MARK}`,
        {
          sender: user,
          receiver: lot,
          mark: likeOrDislike
        }
      ).toPromise() as Promise<ServerResponse>;

    }//if

  }//likeLot

  //получение списка оценок лота
  getLikeDislikeList( offset: number, limit: number ): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('limit' , limit.toString())
      .set('offset' , offset.toString());

    return this.http.get(

      `${ApiRoutes.SERVER_URL}${ApiRoutes.LOT_MARK_LIST}`,
      { params: httpParams }

    ).toPromise() as Promise<ServerResponse>;

  }//getLikeDislikeList

  getLotById( id: string ): Promise<ServerResponse> {

    const httpParams: HttpParams = new HttpParams().set('id', id);

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_LOT_BY_ID}`,
      {
        params: httpParams
      }
    ).toPromise() as Promise<ServerResponse>;
  }//getLotById

}//LotService





