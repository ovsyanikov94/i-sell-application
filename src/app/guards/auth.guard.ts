import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/user/auth.service';
import {ServerResponse} from '../models/server/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthService
  ){

  }//constructor

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {

    return this.authService.isAuth()
      .then( (response: ServerResponse) => {

        if( response.status !== 200 ){
          this.router.navigateByUrl('/authorize');
          return false;
        }
        return true;

      } )
      .catch( error => {

        this.router.navigateByUrl('/authorize');
        return false;

      });

  }//canActivateChild

}//AuthGuard
