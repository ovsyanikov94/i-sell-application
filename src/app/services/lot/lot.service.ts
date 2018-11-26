import { Injectable } from '@angular/core';

import { ApiRoutes } from '../../models/ApiRoutes';

import { Constants } from '../../models/Constants';

import {ServerResponse} from "../../models/server/ServerResponse";

import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

import { Lot } from '../../models/lot/Lot';

import {User} from '../../models/user/User';

@Injectable({
  providedIn: 'root'
})
export class LotService {

  constructor(
    private http: HttpClient
  ) { }//constructor

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

  getLot( lot: Lot ): Promise<ServerResponse>{

    const formData = new FormData();

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.ADD_LOT}`,
      {
        lotTitle: lot.lotTitle
      }
    ).toPromise() as Promise<ServerResponse>;

  }//getLot

  //поставить лайк или дизлайк лоту
  async likeOrDislikeLot( lot: Lot, user: User, mark: number ): Promise<ServerResponse>{

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

}//LotService
