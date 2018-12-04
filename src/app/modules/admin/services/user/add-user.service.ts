import { Injectable } from '@angular/core';
import {User} from '../../models/user/User';
import {ApiRoutes} from "../../models/ApiRoutes";
import {HttpClient, HttpParams} from '@angular/common/http';
import {ServerResponse} from "../../models/server/ServerResponse";
import {FileInput} from 'ngx-material-file-input';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http: HttpClient) { }

  getRoleUserById( id: number ): Promise<ServerResponse>{




    const httpParams: HttpParams = new HttpParams()
      .set('id', id.toString());

    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_USER_ROLE_BYID}`,
      {
        params: httpParams
      }
    ).toPromise() as Promise<ServerResponse>;

  }//getTypeLot

  getUserRoles(  ): Promise<ServerResponse>{


    return this.http.get(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.GET_USER_ROLES_LIST}`,

    ).toPromise() as Promise<ServerResponse>;

  }//getTypeLot

  async addUserWithRole( user: User, files: FileInput ): Promise<ServerResponse>{


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
    formData.append('password' , user.userPassword) ;
    formData.append('role' , user.userRole.userRoleId.toString()) ;

    return this.http.post(
      `${ApiRoutes.SERVER_URL}${ApiRoutes.USER_ADD}`,
      formData
    ).toPromise() as Promise<ServerResponse>;

  }//register
}
