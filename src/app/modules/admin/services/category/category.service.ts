import { Injectable } from '@angular/core';

import { ApiRoutes } from '../../models/ApiRoutes';

import {ServerResponse} from "../../models/server/ServerResponse";

import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories( offset: number, limit: number ): Promise<ServerResponse>{

      const httpParams: HttpParams = new HttpParams()
        .set('limit' , limit.toString())
        .set('offset' , offset.toString());

      return this.http.get(
        `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_CATEGORIES_LIST}`,
        {
          params: httpParams
        }
      ).toPromise() as Promise<ServerResponse>;

  }//getCategories

  addCategory( title: string ): Promise<ServerResponse>{

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.ADD_CATEGORY}`,
      {
        categoryTitle: title
      }
    ).toPromise() as Promise<ServerResponse>;

  }//addCategory

  removeCategory( id: string ){

    const request = new HttpRequest(
      'DELETE',
      `${ApiRoutes.SERVER_URL}${ApiRoutes.DELETE_CATEGORY}`,
      {
        'id': id
      }
    );

    return this.http.request(request).subscribe( next => {
        return next;
    });

  }//addCategory

}//CategoryService
