import { Injectable } from '@angular/core';
import {User} from '../../models/user/User';
import {ApiRoutes} from "../../models/ApiRoutes";
import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerResponse} from "../../models/server/ServerResponse";
import {FileInput} from "ngx-material-file-input";


@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) {
  }

  getUser(): Promise<ServerResponse>{

    //const httpParams: HttpParams = new HttpParams()
      //.set('userId', login);

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_INFO}`
    ).toPromise() as Promise<ServerResponse>;

  }// getUserByLogin

  updateUser(user: User, files: FileInput): Promise<ServerResponse>{

    const formData = new FormData();
    if ( files ){
      [].forEach.call(files.files , ( file ) => {
        formData.append('photo' , file );
      });
    }//if
    formData.append('login' , user.userLogin) ;
    formData.append('email' , user.userEmail) ;
    formData.append('firstName' , user.userName) ;
    formData.append('lastName' , user.userLastname) ;
    formData.append('phone' , user.userPhone) ;


    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_CHANGE_PARAMS}`,
      formData
    ).toPromise() as Promise<ServerResponse>;

  }// getUserByLogin
}
