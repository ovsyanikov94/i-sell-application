import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Lot} from '../../models/lot/Lot';
import {Observable} from 'rxjs';
import {LotService} from './lot.service';
import {ServerResponse} from '../../models/server/ServerResponse';
import {LotType} from '../../models/lot-type/LotType';
import {LotStatus} from '../../models/lot-status/Lot-status';

@Injectable({
  providedIn: 'root'
})
export class LotResolverService implements Resolve<ServerResponse>{

  constructor( private lotService: LotService ){ }//constructor

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<ServerResponse> | Promise<ServerResponse> | ServerResponse {
    return this.lotService.getLotById(
      route.params.id
    );
  }//resolve

}//LotResolverService
