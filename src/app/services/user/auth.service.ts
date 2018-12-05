import { Injectable } from '@angular/core';
import { User } from '../../models/user/User';
import { ApiRoutes } from '../../models/ApiRoutes';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerResponse} from '../../models/server/ServerResponse';
import {promise} from "selenium-webdriver";
import {FileInput} from 'ngx-material-file-input';
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

  async getUser( id?: string ): Promise<ServerResponse> {

    const params: HttpParams = new HttpParams()
      .set("userId" , ( id || -1 ).toString() );

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_INFO}`,
      {
        params: params
      }
    ).toPromise() as Promise<ServerResponse>;
  }//authorize

  async addUserAvatar(files: FileInput): Promise <ServerResponse>{

    console.log(files);
    const formData = new FormData();
    formData.append(
      'image', files.files[0]
    );
      return this.http.post(
        `${ApiRoutes.SERVER_URL}${ApiRoutes.ADD_USER_AVATAR}`,
        formData
      ).toPromise() as Promise<ServerResponse>;
  }//addUserAvatar
}
