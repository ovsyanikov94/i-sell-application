import { Injectable } from '@angular/core';
import {User} from '../../models/user/User';
import {ApiRoutes} from "../../models/ApiRoutes";
import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerResponse} from "../../models/server/ServerResponse";

@Injectable({
  providedIn: 'root'
})
export class GetUserListService {

  constructor(private http: HttpClient) { }

  getUserList(offset: number, limit: number): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('limit' , limit.toString())
      .set('offset' , offset.toString());

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_USER_LIST}`,
      {
        params: httpParams
      }
    ).toPromise() as Promise<ServerResponse>;

  }// getUserByLogin

}
