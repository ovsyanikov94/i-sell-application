import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ServerResponse} from "../../models/server/ServerResponse";
import {Observable} from "rxjs";
import {LotService} from "./lot.service";

@Injectable({
  providedIn: 'root'
})
export class SingleLotResolveService implements Resolve<ServerResponse> {

  constructor(
    private lotService: LotService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<ServerResponse> | Promise<ServerResponse> | ServerResponse {
    return this.lotService.getLotById(
      route.params.id
    );
  }//resolve
}
