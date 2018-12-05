import { Injectable } from '@angular/core';
import { User } from '../../models/user/User';
import { ApiRoutes } from '../../models/ApiRoutes';
import {HttpClient} from '@angular/common/http';
import {ServerResponse} from '../../models/server/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  isAuth(): Promise<ServerResponse>{

    return (this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.IS_USER_AUTHORIZED}`
    ).toPromise() as Promise<ServerResponse>);

  }//isAuth

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

  async changeUserInfo( user: User ): Promise<ServerResponse> {

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_CHANGE_PARAMS}`,
      {
        email: user.userEmail,
        firstName: user.userName,
        lastName: user.userLastname,
        phone: user.userPhone,
      }
    ).toPromise() as Promise<ServerResponse>;

  }//authorize


  async changePassword( user: User ): Promise<ServerResponse> {

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_CHANGE_PARAMS}`,
      {
        newPassword: user.userConfirmPassword,
        oldPassword: user.userOldPassword
      }
    ).toPromise() as Promise<ServerResponse>;

  }//authorize

  async getUser(): Promise<ServerResponse> {

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_INFO}`,
    ).toPromise() as Promise<ServerResponse>;

  }//authorize
}
