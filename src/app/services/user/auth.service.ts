import { Injectable } from '@angular/core';
import { User } from '../../models/user/User';
import { ApiRoutes } from '../../models/ApiRoutes';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerResponse} from '../../models/server/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  isAuth(): boolean{
    return true;
  }

  async register( user: User ): Promise<ServerResponse>{

      return this.http.post(
          `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_REGISTER}`,
          {
            login: user.userLogin,
            email: user.userEmail,
            firstName: user.userName,
            lastName: user.userLastname,
            phone: user.userPhone,
            password: user.userPassword
          }
      ).toPromise() as Promise<ServerResponse>;

  }//register

  async authorize( user: User ): Promise<ServerResponse> {

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_AUTHORIZE}`,
      {
        userLogin: user.userLogin,
        userPassword: user.userPassword
      }
    ).toPromise() as Promise<ServerResponse>;

  }//authorize

  async geyUserById( userId: String ): Promise<ServerResponse>{

    const httpParams: HttpParams = new HttpParams()
      .set('id' , userId.toString());


    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_USER_BYID}`,
      {
        params: httpParams
      }
    ).toPromise() as Promise<ServerResponse>;

  }//getTypeLot
}
