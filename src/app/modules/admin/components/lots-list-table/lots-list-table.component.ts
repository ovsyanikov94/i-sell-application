import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import {Lot} from '../../models/lot/Lot';
import {LotService} from "../../services/lot/lot.service";
import {ServerResponse} from "../../models/server/ServerResponse";
import {LotType} from "../../models/lot-type/LotType";
import {LotStatus} from "../../models/lot-status/Lot-status";
import {ActivatedRoute} from "@angular/router";

import * as moment from 'moment';

@Component({
  selector: 'app-lots-list-table',
  templateUrl: './lots-list-table.component.html',
  styleUrls: ['./lots-list-table.component.css']
})
export class LotsListTableComponent implements OnInit {

  public moment  = moment;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public lots: Lot[] = [];
  public lotListSource: MatTableDataSource<Lot>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [  'lotSeller',
                        'lotName',
                        'lotType',
                        'lotStartPrice',
                        'lotSendDate',
                        'lotStatus',
  ];

  constructor(
    private lotService: LotService,
    private route: ActivatedRoute,
  ) {

    this.route.data.subscribe( (resolvedData: any ) => {

      console.log('resolved data:' , resolvedData);
      this.lots = resolvedData.lotsResponse.data as Lot[];

    } );

    this.onLotsResponse();

  }//constructor


  async onLotsResponse(){

    try{

        for(let i =0; i< this.lots.length; i++){

          const lot  = this.lots[i];

          const typeLotResponse = await this.lotService.getTypeLotById(+lot.typeLot);

          if(typeLotResponse.status===200){
            lot.typeLot = typeLotResponse.data as LotType;
          }//if

          const statusLotResponse = await this.lotService.getStatusLotById(+lot.statusLot);

          if(statusLotResponse.status===200){
            lot.statusLot = statusLotResponse.data as LotStatus;
          }//if

        }//for


    }//try
    catch ( ex ){

      console.log( "Exception: " , ex );

    }//catch


  }//onLotsResponse

  ngOnInit() {

    this.lotListSource = new MatTableDataSource<Lot>(this.lots);
    this.lotListSource.paginator = this.paginator;
    this.lotListSource.sort = this.sort;

  }//ngOnInit



  applyFilter(filterValue: string) {

    this.lotListSource.filter = filterValue.trim().toLowerCase();

  }//applyFilter


}//LotsListTableComponent
