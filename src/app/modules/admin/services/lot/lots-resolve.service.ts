import { Injectable } from '@angular/core';
import {ServerResponse} from "../../models/server/ServerResponse";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {LotService} from "./lot.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LotsResolveService implements Resolve<ServerResponse>{

  constructor(
    private lotService: LotService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<ServerResponse> | Promise<ServerResponse> | ServerResponse {
    return this.lotService.getLotListPanel(

    );
  }//resolve
}
