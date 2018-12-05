import { Injectable } from '@angular/core';
import { User } from '../../models/user/User';
import { ApiRoutes } from '../../models/ApiRoutes';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerResponse} from '../../models/server/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  async getSubscriber(id?: string, limit?: number, offset?: number): Promise<ServerResponse>{
    const params = new HttpParams()
      .set(
        'userId' , ( id || -1).toString()
      )
      .set(
        'limit', limit.toString()
      )
      .set(
        'offset', offset.toString()
      );
    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_SUBSCRIBERS}`,
       {
         params: params
       }
      ).toPromise() as Promise<ServerResponse>;
  }//getSubscriber

  async getSubscriptions(id?: string, limit?: number, offset?: number): Promise<ServerResponse>{
    const params = new HttpParams()
      .set(
        'userId' , ( id || -1).toString()
      )
      .set(
        'limit', limit.toString()
      )
      .set(
        'offset', offset.toString()
      );
    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_SUBSCRIPTION}`,
      {
        params: params
      }
    ).toPromise() as Promise<ServerResponse>;
  }//getSubscriptions

  async addSubscriber(user: User): Promise<ServerResponse>{
    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_ADD_IN_SUBSCRIBERS}`,
      {
        'UserIDInSubscribersList': user._id
      }
    ).toPromise() as Promise<ServerResponse>;
  }//addSubscriber

  async inListSubstriber(user: User): Promise<ServerResponse>{
    const params = new HttpParams()
      .set(
        'UserIDInSubscribersList', user._id
      );

    return this.http.get(

      `${ApiRoutes.SERVER_URL}${ApiRoutes.IN_LIST_SUBSCRIBERS}`,
        {
          params: params
        }
    ).toPromise() as Promise<ServerResponse>;
  } //inListSubstriber

  async removeSubscriber(user: User): Promise<ServerResponse>{
    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_REMOVE_IN_SUBSCRIBERS}`,
      {
        'UserIDInSubscribersList': user._id
      }
    ).toPromise() as Promise<ServerResponse>;
  }//addSubscriber
}
