import { Injectable } from '@angular/core';
import { User } from '../../models/user/User';
import {HttpClient} from '@angular/common/http';

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

  async register( user: User ){

      return this.http.post(

      );

  }//register

}
